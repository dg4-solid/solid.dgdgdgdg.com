import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://solid.dgdgdgdg.com",
  integrations: [],
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
