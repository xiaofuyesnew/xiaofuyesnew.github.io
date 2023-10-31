import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home - Allen Wong',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
