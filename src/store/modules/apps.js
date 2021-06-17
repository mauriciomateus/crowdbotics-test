import axios from 'axios'
import { formIsNotSending, formIsSending, getFormErrors, resetFormErrors, setFormErrors, setFormField } from '../../helpers'

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
      context.commit('formIsSending')
      axios.post('/api/v1/apps/', context.state.formData)
        .then(response => {
          context.commit('pushAppToIndex', response.data)
          context.commit('formIsNotSending')
          console.log(response.data)
        })
        .catch(error => {
          console.log('appFormErrors:', error.response.data)
          context.commit('setFormErrors', error.response.data)
          context.commit('formIsNotSending')
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
    },
    deleteApp (context, id) {
      axios.delete(`/api/v1/apps/${id}`)
        .then(response => {
          context.commit('deleteApp', id)
        })
        .catch(error => console.log(error.response.data))
    }
  },
  mutations: {
    setFormErrors,
    resetFormErrors,
    setFormField,
    formIsSending,
    formIsNotSending,
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
    },
    deleteApp (state, id) {
      const { apps } = state
      const copy = [...apps]
      const newApps = copy.filter(app => {
        return app.id !== id
      })
      state.apps = newApps
    }

  },
  getters: {
    getFormErrors,
    appCrudModalIsOpen (state) {
      return !!state.appCrudModalIsOpen
    },
    appFormSending (state) {
      return state.sending
    },
    getAppIndex (state) {
      return state.apps
    }
  },
  modules: {
  }
}
