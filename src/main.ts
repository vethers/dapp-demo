import { createApp } from 'vue'
import App from './App.vue'
import { VethersPlugin } from '@vethers/client'
const app = createApp(App)
app.use(VethersPlugin)
app.mount('#app')
