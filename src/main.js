// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/base.css'
import './assets/js/fontsize.js'
import './assets/css/style.css'
import headTop from './components/common/header'
import deilForm from './components/common/deil_form'
import deilHeader from './components/common/deial_header'
import addName from './components/common/addName'
import deilHeaderNo from './components/common/deail_header_no'
import bottomNav from './components/common/bottom_nav'
const baseUrl =  "https://www.easy-mock.com/mock/5ab9aa4140e2f860383e2b73"
Vue.prototype.baseUrl = baseUrl
Vue.config.productionTip = false
Vue.prototype.$http = axios
require('./mock.js')
/* eslint-disable no-new */
Vue.component('headTop', headTop)
Vue.component('bottomNav', bottomNav)
Vue.component('deilForm', deilForm)
Vue.component('deilHeader', deilHeader)
Vue.component('deilHeaderNo', deilHeaderNo)
Vue.component('addName', addName)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
