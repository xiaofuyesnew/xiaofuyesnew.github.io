import { createRouter, createWebHashHistory } from 'vue-router'
import blogRoutes from './routes/blog'

// console.log(routes)

const routes = [
  ...blogRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = import.meta.env.VITE_APP_NAME
  }
})

export default router
