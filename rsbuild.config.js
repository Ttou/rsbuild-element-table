import { defineConfig } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'

export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts'
    }
  },
  html: {
    title: 'App',
    mountId: 'app'
  },
  plugins: [pluginVue2()],
  server: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: 3000
  }
})
