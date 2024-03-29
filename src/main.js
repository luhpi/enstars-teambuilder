import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/sass/style.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).use(store).mount('#app')