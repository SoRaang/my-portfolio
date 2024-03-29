// Necessaries
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import VueSplide from '@splidejs/vue-splide'

// Else
import 'vue-global-api'
import 'remixicon/fonts/remixicon.css'
import './assets/scss/style.css'

// Initializing
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueSplide)
app.mount('#app')