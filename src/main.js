// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/element-variables.scss'

// axios 官方推荐API
import axios from 'axios'
import store from './store'
// import "babel-polyfill"

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)

// 初始化钱包
if (web3 && web3.eth.defaultAccount)
  store.commit("setWallet",web3.eth.defaultAccount)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
