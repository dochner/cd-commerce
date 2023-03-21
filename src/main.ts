import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { UserModule } from './types'

import './styles/main.css'

const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/about',
    component: () => import('./pages/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

Object.values(
  import.meta.glob<{ install: UserModule }>("./plugins/*.{js,ts}", { eager: true })
).forEach((i) => i.install?.({ app, router }));;

app.mount('#app')
