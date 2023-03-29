import { UserModule } from '~/types'
import { Quasar, Notify, QuasarPluginOptions } from 'quasar'

import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'

export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    config: {
      dark: true,
      brand: {
        primary: '#3f59f2',
        secondary: '#9900f1',
        accent: '#1f3eeb',
        dark: '#1D1D1D',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      },
      extras: [
        'roboto-font',
      ],
    },
    plugins: {
      Notify,
    },
  } as Partial<QuasarPluginOptions>)
}
