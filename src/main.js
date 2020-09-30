import Vue from 'vue'
import App from './App.vue'

//适配
import "amfe-flexible"
//请求
import axios from "@/axios/axios.js"
import * as API from "@/axios/index.js"
Vue.prototype.$API = API
Vue.prototype.$axios = axios

import router from "./router/index.js"
import store from "./store"
import "./static/iconfont/iconfont.css"

Vue.config.productionTip = false

// swiper的引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
