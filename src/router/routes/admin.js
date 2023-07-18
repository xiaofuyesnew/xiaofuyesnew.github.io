import Layout from '@/components/Layout/AdminLayout.vue'

export default [
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/Dashboard.vue'),
        meta: {
          title: '控制台',
          menu: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录',
      menu: false
    }
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/profile',
    meta: {
      title: '个人中心',
      menu: false
    },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: {
          title: '个人信息',
          menu: true,
          icon: 'User'
        }
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/user/Settings.vue'),
        meta: {
          title: '个人设置',
          menu: true,
          icon: 'User'
        }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    meta: {
      menu: false
    },
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/Error.vue'),
        meta: {
          title: '未找到',
          menu: false
        }
      },
      {
        path: '401',
        name: '401',
        component: () => import('@/views/Error.vue'),
        meta: {
          title: '未授权',
          menu: false
        }
      },
      {
        path: '500',
        name: '500',
        component: () => import('@/views/Error.vue'),
        meta: {
          title: '内部错误',
          menu: false
        }
      }
    ]
  },
  {
    path: '/:path(.*)*',
    name: 'notFound',
    redirect: '/error/404'
  }
]
