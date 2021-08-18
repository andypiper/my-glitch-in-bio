import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      context: {
        title: "Hello, world!" //todo - send links.json & meta.json
      }
    })
  ],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
});
