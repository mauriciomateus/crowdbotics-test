import axios from 'axios'
import { getFormErrors, resetFormErrors, setFormErrors, setFormField } from '../../helpers'

export default {
  namespaced: true,
  state: {
    appCrudModalIsOpen: false,
    sending: false,
    formErrors: {},
    formData: {},
    apps: {}
  },
  actions: {
    createApp (context) {
      context.commit('resetFormErrors')
      axios.post('/api/v1/apps/', context.state.formData)
        .then(response => {
          context.commit('pushAppToIndex', response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log('appFormErrors:', error.response.data)
          context.commit('setFormErrors', error.response.data)
        })
    },
    fetchAppIndex (context) {
      axios.get('/api/v1/apps/')
        .then(response => {
          context.commit('setAppIndex', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mutations: {
    setFormErrors,
    resetFormErrors,
    setFormField,
    openModalCrudAppModal (state) {
      state.appCrudModalIsOpen = true
    },
    closeCrudAppModal (state) {
      state.appCrudModalIsOpen = false
    },
    setAppIndex (state, payload) {
      state.apps = payload
    },
    pushAppToIndex (state, app) {
      state.apps.push(app)
    }

  },
  getters: {
    getFormErrors,
    appCrudModalIsOpen (state) {
      return !!state.appCrudModalIsOpen
    },
    appFormSending (state) {
      return state.appFormSending
    },
    getAppIndex (state) {
      return state.apps
    }
  },
  modules: {
  }
}
