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
      name: 'Docs',
      path: '/docs',
      component: () => import('../views/Docs.vue')
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('../views/About.vue')
    }
  ]
})