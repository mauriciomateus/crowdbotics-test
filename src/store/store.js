import Vue from 'vue'
import axios from 'axios'
import Vuex, { Store } from 'vuex'
import router from './../../router/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appCrudModalIsOpen: false,
    appFormSending: false,
    appFormCrudErrors: {},
    appFormData: {}
  },
  actions: {
    createApp (context) {
      context.commit('resetCrudFormErrors')
      axios.post('/api/v1/apps/', context.state.appFormData)
        .then(response => console.log(response.data))
        .catch(error => {
          console.log(error.response.data)
          context.commit('setCrudFormErrors', error.response.data)
        })
    }
  },
  mutations: {
    openModalCrudAppModal (state) {
      state.appCrudModalIsOpen = true
    },
    closeModalCrudAppModal (state) {
      state.appCrudModalIsOpen = false
    },
    setCrudFormErrors (state, errors) {
      this.state.appFormCrudErrors = errors
    },
    resetCrudFormErrors (state, errors) {
      this.state.appFormCrudErrors = { errors }
    },
    setCrudFormData (state, payload) {
      console.log({ payload })
      const { formObjectName, formFieldName, fieldValue } = payload
      console.log('the info 1', { formObjectName, formFieldName, fieldValue })
      if (!(formFieldName && formObjectName && fieldValue)) {
        console.warn('Incomplete info to set crud form data: ', { formObjectName, formFieldName, fieldValue })
        return
      }
      console.log('the info 2', { formObjectName, formFieldName, fieldValue })
      state[formObjectName][formFieldName] = fieldValue
    }
  },
  getters: {
    appCrudModalIsOpen (state) {
      return !!state.appCrudModalIsOpen
    },
    appFormSending (state) {
      return state.appFormSending
    },
    getBackendFormError: (state) => (errorObjectName, fieldName) => {
      // May need to be reworked to only app crud form errors depending on the error response for other entities
      console.log({ errorObjectName, fieldName })
      if (!state[errorObjectName]) {
        console.warn('Unable to find error store for: ', errorObjectName)
        return
      }
      console.log(state[errorObjectName][fieldName])
      const error = state[errorObjectName][fieldName]
      if (Array.isArray(error) && error.length) {
        return error[0]
      }
      return error
    }
  },
  modules: {

  }
})
