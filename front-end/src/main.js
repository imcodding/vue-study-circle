import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App)
.use(router)
.mount('#app')

require('@/assets/css/reset.css')
require('@/assets/css/style.css')