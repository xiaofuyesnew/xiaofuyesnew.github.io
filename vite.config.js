import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import mkcert from 'vite-plugin-mkcert'
import Imagemin from 'unplugin-imagemin/vite'

export default defineConfig(({ mode }) => {
  const root = process.cwd()

  const plugins = [
    UnoCSS(),
    vue(),
    createHtmlPlugin({
      minify: mode === 'production',
      inject: {
        data: {
          title: 'Allen Wong',
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: resolve(root, '.eslintrc-auto-import.json'),
        globalsPropValue: true,
      },
      dts: false,
    }),
    Components({
      dts: false,
    }),
  ]

  const esbuild = {}
  const build = {}

  if (mode === 'development')
    plugins.push(mkcert())

  if (mode === 'production') {
    plugins.push(Imagemin())
    esbuild.pure = ['console.log', 'debugger']
    build.target = 'es2015'
    build.chunkSizeWarningLimit = 2000
    build.sourcemap = true
  }

  return {
    plugins,
    esbuild,
    build,
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
  }
})
