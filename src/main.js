import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/store'
import router from './../router/router'
import { setAxiosAuthHeader } from './helpers'

Vue.config.productionTip = false
setAxiosAuthHeader()
axios.defaults.baseURL = 'https://hiring-example-25770.botics.co'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
