import { resolve } from 'path'

import dayjs from 'dayjs'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mkcert from 'vite-plugin-mkcert'
import Legacy from '@vitejs/plugin-legacy'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
import Imagemin from 'unplugin-imagemin/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { generateEnv, getPackage, getSvgIconsList } from './scripts/vite'

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const pkg = getPackage()
  const env = generateEnv(loadEnv(mode, root))

  const AppInfo = {
    pkg: { ...pkg }
  }

  let plugins = [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: env.VITE_APP_NAME
        }
      }
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: resolve(root, '.eslintrc-auto-import.json'),
        globalsPropValue: true
      }
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver()
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), env.VITE_SVG_ICONS_DIR)],
      symbolId: 'i-[dir]-[name]',
      customDomId: 'svg_icons_dom'
    })
  ]

  const config = {
    root,
    base: env.VITE_BASE || '/',
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(root, 'src')
        }
      ]
    }
  }

  if (mode === 'development') {
    AppInfo.lastDevTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

    config.server = {
      host: true,
      https: env.VITE_HTTPS,
      open: env.VITE_OPEN,
      port: env.VITE_PORT || 5173,
      proxy: Object.keys(env.VITE_PROXY).reduce((acc, item) => {
        const target = env.VITE_PROXY[item]
        acc[item] = {
          target,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${item}`), ''),
          secure: /^https:\/\//.test(target)
        }
        return acc
      }, {})
    }

    // console.log(typeof env.VITE_HTTPS)

    if (env.VITE_HTTPS) {
      plugins = plugins.concat([mkcert()])
    }
  }

  if (mode === 'production') {
    AppInfo.lastProdTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

    config.esbuild = {
      pure: env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    }

    config.build = {
      chunkSizeWarningLimit: 2000,
      sourcemap: env.VITE_SOURCEMAP
    }

    if (env.VITE_UGLIFY) {
      plugins = plugins.concat([
        viteObfuscateFile({
          rotateUnicodeArray: true
        })
      ])
    }

    if (env.VITE_LEGACY) {
      plugins = plugins.concat([
        Legacy({
          targets: ['iOS >= 11', 'Chrome >= 64'],
          modernPolyfills: true
        })
      ])
    } else {
      config.build.target = 'es2015'
    }

    if (env.IMAGEMIN) {
      plugins = plugins.concat([
        Imagemin()
      ])
    }
  }

  config.plugins = plugins

  config.define = {
    APP_INFO: JSON.stringify(AppInfo),
    SVG_ICONS_LIST: getSvgIconsList(env.VITE_SVG_ICONS_DIR)
  }

  return config
})
