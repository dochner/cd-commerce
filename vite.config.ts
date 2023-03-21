import path from "node:path";
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      vue()
    ],
    define: {
      API_URL: env.API_URL
    },
  }
})
