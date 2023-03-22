import path from "node:path";
import { defineConfig, loadEnv } from 'vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import Vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      Vue({
        template: { transformAssetUrls }
      }),
      quasar({
        autoImportComponentCase: 'combined',
        sassVariables: 'src/styles/quasar/variables.sass'
      }),
      UnoCSS({
        presets: [
          UnocssIcons({
            prefix: 'i-',
            extraProperties: {
              display: 'inline-block'
            }
          }),
        ],
      }),
    ],
    define: {
      API_URL: env.API_URL
    },
  }
})
