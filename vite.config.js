import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  server: {
    open: true
  },
  build: {
    assetsInlineLimit: 0,
  },
  base: './',
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) =>
            `element-plus/packages/theme-chalk/src/${name.slice(3)}.scss`,
          resolveComponent: (name) => `element-plus/lib/${name}`,
        },
      ],
    }),
  ]
})
