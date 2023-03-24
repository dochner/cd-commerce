export const routes = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
  },
  {
    path: '/about',
    component: () => import('~/pages/about.vue'),
  },
  {
    path: '/contact-us',
    component: () => import('~/pages/contact-us.vue'),
  },
  {
    path: '/account',
    component: () => import('~/pages/account/index.vue'),
    children: [
      {
        path: '/account/login',
        component: () => import('~/pages/account/login.vue'),
      },
      {
        path: '/account/register',
        component: () => import('~/pages/account/register.vue'),
      },
      {
        path: '/account/details',
        component: () => import('~/pages/account/details.vue'),
      },
    ],
  },
]

export default routes