import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadAllPlugins } from '@/plugins'
import '@/permission.ts'

import './assets/main.css'

const app = createApp(App)

loadAllPlugins(app)

app.use(router)

app.mount('#app')
