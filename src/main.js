import { createApp } from 'vue'
import App from './App.vue'

import './styles/global.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          primary: '#2c5ea5',
          secondary: '#567eb7',
          'on-surface': '#111111',
          'on-primary': '#ffffff',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
