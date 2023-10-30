import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import mkcert from 'vite-plugin-mkcert'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const root = process.cwd()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Allen Wong",
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  description: "Allen Wong's Blog",
  // locales: {
  //   root: {
  //     lang: 'en',
  //     label: 'English'
  //   },
  //   zh: {
  //     lang: 'zh',
  //     label: '简体中文',
  //     link: '/docs/zh/simple'
  //   }
  // },
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
      { icon: 'twitter', link: 'https://twitter.com/xiaofuyesnew' },
      { icon: 'github', link: 'https://github.com/xiaofuyesnew' },
    ],
    footer: {
      copyright: '<a class="link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 2023-PRESENT © Allen Wong'
    }
  },
  vite: {
    plugins: [
      mkcert(),
      UnoCSS(),
      createSvgIconsPlugin({
        iconDirs: [resolve(root, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
      }),
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
        '@': '/src'
      }
    }
  }
})
