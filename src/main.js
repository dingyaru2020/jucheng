import Vue from 'vue'
import App from './App.vue'

//适配
import "amfe-flexible"
//请求
import axios from "@/axios/axios.js"
import * as API from "@/axios/index.js"
Vue.prototype.$API = API
Vue.prototype.$axios = axios

// 注册公共组件
import TopBar from "./components/TopBar"
Vue.component("TopBar", TopBar)

import router from "./router/index.js"
import store from "./store"
import "./static/iconfont/iconfont.css"

import "./plugin"
//注册全局时间过滤器
// import "./plugin/filter.js"

Vue.config.productionTip = false

// swiper的引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  error:"@/static/images/show/error.jpg",
  loading:'@/static/images/show/loading.gif'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
