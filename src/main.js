// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/element-variables.scss'
// 组件之间数据传递
import Vuex from 'vuex'

// axios 官方推荐API
import axios from 'axios'

Vue.config.productionTip = false
// 光引用不成，还得使用
Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
