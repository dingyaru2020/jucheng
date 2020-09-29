import Vue from 'vue'
import App from './App.vue'

//适配
import "amfe-flexible"
//请求
import axios from "@/axios/index.js"
Vue.prototype.$axios = axios

import router from "./router/index.js"
import store from "./store"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
