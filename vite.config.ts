import path from "node:path";
import { defineConfig, loadEnv } from 'vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Eslint from 'vite-plugin-eslint'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      Vue({
        template: { transformAssetUrls },
      }),
      // https://quasar.dev/start/vite-plugin
      quasar({
        autoImportComponentCase: "combined",
        sassVariables: "src/styles/quasar/variables.sass",
      }),
      // https://github.com/antfu/unocss
      UnoCSS({
        presets: [
          UnocssIcons({
            prefix: "i-",
            extraProperties: {
              display: "inline-block",
            },
          }),
        ],
      }),
      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [path.resolve(__dirname, "locales/**")],
      }),
      Eslint()
    ],
    define: {
      API_URL: env.API_URL,
    },
    // test: {
    //   include: ["**/*.{test,spec}.{js,ts}"],
    //   environment: "jsdom",
    // },
  };
});
