import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setupGlobalComponents } from './components'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './style/tailwind.css'

import 'virtual:svg-icons-register'
import { registerIconify } from './utils'
import { pinia, useGlobal } from './store'

const global = useGlobal(pinia)

const app = createApp(App)

setupGlobalComponents(app)

registerIconify()

global.setTheme()

app
  .use(pinia)
  .use(router)
  .mount('#app')
