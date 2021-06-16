import axios from 'axios'
import BackendForm from './BackendForm'

export default {
  namespaced: true,
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
    closeCrudAppModal (state) {
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
    }
  },
  modules: {
    BackendForm
  }
}
