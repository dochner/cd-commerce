import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
            scale: 0.8,
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
