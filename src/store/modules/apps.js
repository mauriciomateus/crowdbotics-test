import axios from 'axios'
import { getFormErrors, resetFormErrors, setFormErrors, setFormField } from '../../helpers'

export default {
  namespaced: true,
  state: {
    appCrudModalIsOpen: false,
    sending: false,
    formErrors: {},
    formData: {},
    apps: {},
    modalInfo: {
      isOpen: false,
      title: null
    },
    currentApp: {}
  },
  actions: {
    createApp (context) {
      context.commit('resetFormErrors')
      context.commit('setModalInfo', { isLoading: true })
      axios.post('/api/v1/apps/', context.state.formData)
        .then(response => {
          context.commit('pushAppToIndex', response.data)
          context.commit('setModalInfo', { isLoading: false })
          context.commit('toast/setToastInfo', {
            type: 'success',
            title: 'success!',
            message: 'App created successfully'
          }, { root: true })
        })
        .catch(error => {
          context.commit('setFormErrors', error.response.data)
          context.commit('setModalInfo', { isLoading: false })
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
      context.commit('setModalInfo', { isLoading: true })
      axios.delete(`/api/v1/apps/${id}`)
        .then(response => {
          context.commit('deleteApp', id)
          setTimeout(() => {
            context.commit('clearModalInfo')
          }, 1800)
          context.commit('toast/setToastInfo', {
            type: 'success',
            title: 'success!',
            message: 'App deleted successfully'
          }, { root: true })
          setTimeout(() => {
            context.commit('toast/clearToastInfo', null, { root: true })
          }, 3600)
        })
        .catch(error => {
          context.commit('setModalInfo', { isLoading: false })
          console.log(error.response.data)
        })
    }
  },
  mutations: {
    setFormErrors,
    resetFormErrors,
    setFormField,
    setAppIndex (state, payload) {
      state.apps = payload
    },
    pushAppToIndex (state, app) {
      state.apps.push(app)
    },
    clearCurrentApp (state) {
      state.currentApp = {}
    },
    deleteApp (state, id) {
      const { apps } = state
      const copy = [...apps]
      const newApps = copy.filter(app => {
        return app.id !== id
      })
      state.apps = newApps
    },
    setModalInfo (state, data) {
      const currentData = { ...state.modalInfo }
      state.modalInfo = Object.assign(currentData, data)
    },
    clearModalInfo (state) {
      state.modalInfo = {}
    },
    setCurrentApp (state, data) {
      state.currentApp = data
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
    },
    getModalInfo (state) {
      return state.modalInfo
    },
    getCurrentApp (state) {
      return state.currentApp
    }
  },
  modules: {
  }
}
