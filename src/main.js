import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store'
import { setupGlobalComponents } from './components'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style/custom.css'

const app = createApp(App)

setupGlobalComponents(app)

app.use(pinia).use(router).mount('#app')
