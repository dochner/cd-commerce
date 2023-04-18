import { UserModule } from './../types/index';
import { createPinia } from 'pinia'

export const install:UserModule = ({ app }) => {
  const pinia = createPinia()

  app.use(pinia)
}