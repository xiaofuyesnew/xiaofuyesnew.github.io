import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: () => import('../views/Index.vue')
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('../views/About.vue')
    }
  ]
})