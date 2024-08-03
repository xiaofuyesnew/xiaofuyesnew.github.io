import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Allen’s Code Corner',
  description: 'Allen’s Code Corner',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9606899126268202',
      crossorigin: 'anonymous',
    }],
  ],
  vite: {
    plugins: [Unocss()],
    resolve: {
      alias: {
        '@': resolve(cwd()),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the GPL License.',
      copyright: 'Copyright © 2024-present Allen Huang',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/tutorial', activeMatch: '/tutorial/' },
      { text: '博客', link: '/blog', activeMatch: '/blog/' },
      {
        text: '工具',
        items: [
          { text: 'baidu', link: 'https://www.baidu.com' },
        ],
      },
      { text: 'Github City', link: '/github-city', activeMatch: '/github-city' },
      { text: '关于我', link: '/about', activeMatch: '/about/' },
    ],
    sidebar: {
      '/blog/': [
        {
          text: '写在前面',
          link: '/blog/',
        },
        {
          text: '2024',
          link: '/blog/2024/',
          items: [
            {
              text: 'August',
              items: [
                {
                  text: '推荐一个文字转语音工具',
                  link: '/blog/2024/08/luvvoice',
                },
              ],
            },
          ],
        },
        {
          text: 'Before',
          items: [],
        },
      ],
      '/tutorial/': [
        {
          text: '教程',
          link: '/tutorial/',
          items: [
            {
              text: 'Phaser.js 游戏开发',
              link: '/tutorial/phaserjs_game_dev',
              items: [
                {
                  text: '0.从零开始',
                  link: '/tutorial/phaserjs_game_dev/000_start',
                },
              ],
            },
            {
              text: '从零搭建后台管理',
              link: '/tutorial/admin_from_scratch',
              items: [
                {
                  text: '0.从零开始',
                  link: '/tutorial/admin_from_scratch/000_start',
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      // github
      { icon: 'github', link: 'https://github.com/xiaofuyesnew' },
      // juejin
      {
        icon: {
          svg: '<svg t="1722443882250" class="icon" viewBox="0 0 1212 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4211" width="200" height="200"><path d="M698.29709823 161.95344498L597.85455501 82.75836245l-104.9189194 82.75165526-5.4575013 4.38439708 110.3764207 87.99453639 110.74434276-87.99453639-10.30179954-7.94096981z m380.6453521 307.15305187l-481.36383602 379.5722479-481.05723562-379.35762774L45.45122758 526.41025479l552.12738673 435.34300046 552.43398714-435.58828146-71.07015112-57.05847694z m-481.36383602 30.78275641l-261.96003953-206.52654705-71.03949028 57.05847694 332.96887012 262.57324259 333.30613134-262.81852359-71.03949141-57.05847694-262.23598024 206.77182805z" p-id="4212"></path></svg>',
        },
        link: 'https://juejin.cn/user/2928754705564184',
      },
      // bilibili
      {
        icon: {
          svg: '<svg t="1722443837562" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3158" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4 34.14-32.7 77.66-50.66 130.56-52.2h58.76l-50.7-51.62c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206C851.2 28.68 857 43.2 857 60.8c0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47S173.7 803 192.1 803h640.7c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6zM371 433c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="3159"></path></svg>',
        },
        link: 'https://space.bilibili.com/747089',
      },
      // youtube
      { icon: 'youtube', link: 'https://www.youtube.com/@xiaofuyesnew' },
      // twitter
      { icon: 'twitter', link: 'https://twitter.com/xiaofuyesnew' },
      {
        icon: {
          svg: '<svg t="1722444091931" class="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5225" width="200" height="200"><path d="M914.432 518.144q27.648 21.504 38.912 51.712t9.216 62.976-14.336 65.536-31.744 59.392q-34.816 48.128-78.848 81.92t-91.136 56.32-94.72 35.328-89.6 18.944-75.264 7.68-51.712 1.536-49.152-2.56-68.096-10.24-78.336-21.504-79.872-36.352-74.24-55.296-59.904-78.848q-16.384-29.696-22.016-63.488t-5.632-86.016q0-22.528 7.68-51.2t27.136-63.488 53.248-75.776 86.016-90.112q51.2-48.128 105.984-85.504t117.248-57.856q28.672-10.24 63.488-11.264t57.344 11.264q10.24 11.264 19.456 23.04t12.288 29.184q3.072 14.336 0.512 27.648t-5.632 26.624-5.12 25.6 2.048 22.528q17.408 2.048 33.792-1.536t31.744-9.216 31.232-11.776 33.28-9.216q27.648-5.12 54.784-4.608t49.152 7.68 36.352 22.016 17.408 38.4q2.048 14.336-2.048 26.624t-8.704 23.04-7.168 22.016 1.536 23.552q3.072 7.168 14.848 13.312t27.136 12.288 32.256 13.312 29.184 16.384zM656.384 836.608q26.624-16.384 53.76-45.056t44.032-64 18.944-75.776-20.48-81.408q-19.456-33.792-47.616-57.344t-62.976-37.376-74.24-19.968-80.384-6.144q-78.848 0-139.776 16.384t-105.472 43.008-72.192 60.416-38.912 68.608q-11.264 33.792-6.656 67.072t20.992 62.976 42.496 53.248 57.856 37.888q58.368 25.6 119.296 32.256t116.224 0.512 100.864-21.504 74.24-33.792zM522.24 513.024q20.48 8.192 38.912 18.432t32.768 27.648q10.24 12.288 17.92 30.72t10.752 39.424 1.536 42.496-9.728 38.912q-8.192 18.432-19.968 37.376t-28.672 35.328-40.448 29.184-57.344 18.944q-61.44 11.264-117.76-11.264t-88.064-74.752q-12.288-39.936-13.312-70.656t16.384-66.56q13.312-27.648 40.448-51.712t62.464-38.912 75.264-17.408 78.848 12.8zM359.424 764.928q37.888 3.072 57.856-18.432t21.504-48.128-15.36-47.616-52.736-16.896q-27.648 3.072-43.008 23.552t-17.408 43.52 9.728 42.496 39.424 21.504zM778.24 6.144q74.752 0 139.776 19.968t113.664 57.856 76.288 92.16 27.648 122.88q0 33.792-16.384 50.688t-35.328 17.408-35.328-14.336-16.384-45.568q0-40.96-22.528-77.824t-59.392-64.512-84.48-43.52-96.768-15.872q-31.744 0-47.104-15.36t-14.336-34.304 18.944-34.304 51.712-15.36zM778.24 169.984q95.232 0 144.384 48.64t49.152 146.944q0 30.72-10.24 43.52t-22.528 11.264-22.528-14.848-10.24-35.84q0-60.416-34.816-96.256t-93.184-35.84q-19.456 0-28.672-10.752t-9.216-23.04 9.728-23.04 28.16-10.752z" p-id="5226"></path></svg>',
        },
        link: 'https://weibo.com/u/1183565322',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/xiaofuyesnew/',
      },
    ],
  },
})
