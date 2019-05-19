// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastClick库 解决某些机型click事件300毫秒延迟问题
import fastClick from 'fastclick'
// 解决Android手机浏览器兼容问题
import 'babel-polyfill'
// 引入reset.css 重置页面样式表，使手机样式统一
import './assets/styles/reset.css'
// 引入border.css 解决1px边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
