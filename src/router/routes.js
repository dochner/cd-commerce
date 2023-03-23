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
]

export default routes