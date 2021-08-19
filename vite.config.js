import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

// import json of links and meta in /config
import links from "./config/links.json";
import meta from "./config/meta.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      context: {
        links,
        meta
      }
    })
  ],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port - [Do we need this server object? -Jenn]
    }
  }
});
