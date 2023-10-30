import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const root = process.cwd()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Allen Wong",
  description: "Allen Wong's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaofuyesnew' }
    ]
  },
  vite: {
    plugins: [
      UnoCSS(),
      AutoImport({
        imports: [
          'vue'
        ],
        eslintrc: {
          enabled: true,
          filepath: resolve(root, '.eslintrc-auto-import.json'),
          globalsPropValue: true
        }
      })
    ],
    resolve: {
      alias: {
        '@': '.vitepress'
      }
    }
  }
})
