import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/store'
import router from './../router/router'

Vue.config.productionTip = false
const accessToken = localStorage.getItem('accessToken')
if (accessToken && accessToken.length) {
  axios.defaults.headers.common.Authorization = `token ${accessToken}`
}
axios.defaults.baseURL = 'https://hiring-example-25770.botics.co'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
