import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig(({ mode }) => {

  const plugins = [vue()]

  if (mode === 'development') {
    plugins.push(mkcert())
  }

  return {
    plugins
  }
})
