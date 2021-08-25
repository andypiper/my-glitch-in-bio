import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

// import json of links and meta in /config
import settings from "./settings.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'layout'),
      helpers: {
        empty: (value) => console.log(value),
      },
      context: {
        settings
      }
    })
  ],
  build: {
    cssCodeSplit: false,
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port - [Do we need this server object? -Jenn]
    }
  }
});
