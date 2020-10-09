import Vue from 'vue'
import App from './App.vue'

//适配
import "amfe-flexible"
//请求
import axios from "@/axios/axios.js"
import * as API from "@/axios/index.js"
Vue.prototype.$API = API
Vue.prototype.$axios = axios

import axios1 from "@/axios/axios1.js"
Vue.prototype.$axios1 = axios1
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

import { Swipe, SwipeItem, Tabbar, TabbarItem, Form, button ,field} from "vant";
import "./assets/icon/iconfont.css";
import Recommend from "../src/components/Recommend";
import waterfall from 'vue-waterfall2'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(button);
Vue.use(field);
Vue.use(waterfall)
Vue.component("Recommend", Recommend);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
