import Handlebars from "handlebars";
import { resolve } from "path";
import {
  IndexHtmlTransformContext,
  Plugin as VitePlugin,
  normalizePath
} from "vite";
import { opendir, readFile } from "fs/promises";
import { Context, resolveContext } from "./context";
import { registerPartials } from "./partials";

// This is ALL: https://github.com/alexlafroscia/vite-plugin-handlebars
// Just slightly modified to be able to import the context from the filesystem

type CompileArguments = Parameters<typeof compile>;
type CompileOptions = CompileArguments[1];

export interface HandlebarsPluginConfig {
  context?: Context;
  settingsFile?: string;
  reloadOnPartialChange?: boolean;
  compileOptions?: CompileOptions;
  runtimeOptions?: RuntimeOptions;
  partialDirectory?: string | Array<string>;
  helpers?: HelperDeclareSpec;
}

export default function handlebars({
  context,
  reloadOnPartialChange = true,
  settingsFile,
  compileOptions,
  runtimeOptions,
  partialDirectory,
  helpers
}: HandlebarsPluginConfig = {}): VitePlugin {
  // Keep track of what partials are registered
  const partialsSet = new Set<string>();

  let root: string;

  Handlebars.registerHelper("resolve-from-root", function(path) {
    return resolve(root, path);
  });

  if (helpers) {
    Handlebars.registerHelper(helpers);
  }

  return {
    name: "handlebars",

    configResolved: async resolvedConfig => {
      // We want to avoid restarting the server when we've changed our
      // settings file
      const withoutSettingsJson = resolvedConfig.configFileDependencies.filter(
        dep => dep !== settingsFile
      );
      resolvedConfig.configFileDependencies = withoutSettingsJson;
      root = resolvedConfig.root;
    },

    async handleHotUpdate({ server, file }) {
      server.ws.send({
        type: "full-reload"
      });
      if (reloadOnPartialChange && partialsSet.has(file)) {
        server.ws.send({
          type: "full-reload"
        });

        return [];
      }
    },

    transformIndexHtml: {
      // Ensure Handlebars runs _before_ any bundling
      enforce: "pre",

      async transform(
        html: string,
        ctx: IndexHtmlTransformContext
      ): Promise<string> {
        await registerPartials(partialDirectory, partialsSet);
        const template = Handlebars.compile(html, compileOptions);

        const settings = await readFile(settingsFile);
        let json;
        try {
          json = JSON.parse(settings.toString());
        } catch (e) {
          // There is an error in the JSON! Display the last known working version
          // directly from the vite .cache 
          json = async () => import("../settings.json");
        }

        const resolvedContext = await resolveContext(
          { settings: json },
          normalizePath(ctx.path)
        );
        const result = template(resolvedContext, runtimeOptions);

        return result;
      }
    }
  };
}
