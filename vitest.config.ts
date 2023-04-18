import path from "node:path";
import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    quasar({
      autoImportComponentCase: "combined",
      sassVariables: "src/styles/quasar/variables.sass",
    }),
  ],
  test: {
    include: ["**/*.{test,spec}.{js,ts}"],
    setupFiles: ["./test/setupFile.ts"],
    globals: true,
    environment: "jsdom",
  },
});
