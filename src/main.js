import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/qui-base.css'
import './assets/js/rem.js'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
