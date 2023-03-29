import { RouteRecordRaw  } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
    meta: {
      layout: 'public',
    }
  },
  {
    path: '/about',
    component: () => import('~/pages/about.vue'),
    meta: {
      layout: 'public',
    }
  },
  {
    path: '/contact-us',
    component: () => import('~/pages/contact-us.vue'),
    meta: {
      layout: 'public',
    }
  },
  {
    path: '/account',
    component: () => import('~/pages/account.vue'),
    children: [
      {
        path: '/account/login',
        component: () => import('~/pages/account/login.vue'),
        meta: {
          layout: 'public',
        }
      },
      {
        path: '/account/register',
        component: () => import('~/pages/account/register.vue'),
        meta: {
          layout: 'public',
        }
      },
      {
        path: '/account/details',
        component: () => import('~/pages/account/details.vue'),
        meta: {
          layout: 'public'
        }
      },
    ],
  },
]

export default routes