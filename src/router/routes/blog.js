import Layout from '@/components/Layout/Layout.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: ':id',
        name: 'article',
        component: () => import('@/views/Article.vue')
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'article',
        component: () => import('@/views/About.vue'),
        meta: {
          title: '关于我'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录'
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
        component: () => import('@/views/User/Profile.vue'),
        meta: {
          title: '个人信息',
          menu: true,
          icon: 'User'
        }
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/User/Settings.vue'),
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
