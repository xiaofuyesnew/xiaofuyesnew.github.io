import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import {
  ElButton,
  ElRow,
  ElCol,
  ElContainer,
  ElMain,
  ElHeader,
  ElAside,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTree
} from 'element-plus'

import 'element-plus/packages/theme-chalk/src/base.scss'

const components = [
  ElButton,
  ElRow,
  ElCol,
  ElContainer,
  ElMain,
  ElHeader,
  ElAside,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTree
]

const plugins = []

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

plugins.forEach((plugin) => {
  app.use(Plugin)
})

app.use(store).use(router).mount('#app')
