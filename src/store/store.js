import Vue from 'vue'
import axios from 'axios'
import Vuex, { Store } from 'vuex'
import router from './../../router/router'
import apps from './modules/apps'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  actions: {

  },
  mutations: {

  },
  getters: {

  },
  modules: {
    apps,
    auth
  }
})
