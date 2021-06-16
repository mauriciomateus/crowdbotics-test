import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'
import router from './../../router/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appCrudModalIsOpen: false,
    appFormSending: false
  },
  actions: {
    createApp (context) {
      axios.post('/api/v1/apps/', {

      })
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response.data))
    }
  },
  mutations: {
    openModalCrudAppModal (state) {
      state.appCrudModalIsOpen = true
    },
    closeModalCrudAppModal (state) {
      state.appCrudModalIsOpen = false
    }
  },
  getters: {
    appCrudModalIsOpen (state) {
      return !!state.appCrudModalIsOpen
    },
    appFormSending (state) {
      return state.appFormSending
    }
  },
  modules: {

  }
})
