import { createApp } from 'vue'
import './style.css'
import FloatingVue from 'floating-vue'
import App from './App.vue'

const app = createApp(App)
app.use(FloatingVue)
app.mount('#app')