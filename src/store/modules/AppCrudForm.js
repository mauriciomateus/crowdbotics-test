import axios from 'axios'
import ValidationError from './ValidationError'

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
      const { formModuleName, formFieldName, fieldValue } = payload
      console.log('the info 1', { formModuleName, formFieldName, fieldValue })
      if (!(formFieldName && formModuleName && fieldValue)) {
        console.warn('Incomplete info to set crud form data: ', { formModuleName, formFieldName, fieldValue })
        return
      }
      console.log('the info 2', { formModuleName, formFieldName, fieldValue })
      console.log('Fix this')
      // state[formModuleName][formFieldName] = fieldValue
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
    ValidationError
  }
}
