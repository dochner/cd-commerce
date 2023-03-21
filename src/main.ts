import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { UserModule } from './types'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/index.vue'),
    },
  ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
