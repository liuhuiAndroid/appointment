// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入reset.css 重置页面样式表，使手机样式统一
import './assets/styles/reset.css'
// 引入border.css 解决1px边框问题
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
