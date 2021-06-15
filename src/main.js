import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './../router/router'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://hiring-example-25770.botics.co'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
