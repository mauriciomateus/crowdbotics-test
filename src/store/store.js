import Vue from 'vue'
import axios from 'axios'
import Vuex, { Store } from 'vuex'
import router from './../../router/router'
import AppCrudForm from './modules/AppCrudForm'
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
    AppCrudForm,
    auth
  }
})
