import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('@/views/Admin/Home.vue'),
      },
      {
        path: 'list',
        name: 'admin-list',
        component: () => import('@/views/Admin/List.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
