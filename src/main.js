import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { pinia } from './store'
import { setupGlobalComponents } from './components'

import './style/tailwind.css'

import 'virtual:svg-icons-register'
import { registerIconify } from './utils'

const app = createApp(App)

setupGlobalComponents(app)

registerIconify()

app
  .use(pinia)
  .use(router)
  .mount('#app')
