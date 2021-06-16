import axios from 'axios'
import router from './../../../router/router'

export default {
  namespaced: true,
  state: {
    sending: false,
    formData: {},
    formErrors: {},
    nonFieldErrors: {}
  },
  actions: {
    redirectIfAuthenticated (context) {
      if (!localStorage.getItem('accessToken')) {
        return
      }
      router.push({ name: 'Dashboard.AppsIndex' })
    },
    handleFormSubmit (context, params) {
      const { endPoint } = params
      context.commit('formIsSending')
      context.commit('clearFormErrors')
      axios.post(endPoint, context.state.formData)
        .then(response => {
          context.commit('formIsNotSending')
          console.log(response)
          context.dispatch('handleRedirect', response)
        })
        .catch(error => {
          console.log({ error })
          context.commit('setFormErrors', error.response.data)
          context.commit('formIsNotSending')
          // Temporary just to test redirect without creating an account
          // this.handleRedirect()
        })
    },
    handleRedirect (context, response) {
      const { data } = response
      console.log('data: ', data.key)
      const accessToken = data && data.key ? data.key : ''
      localStorage.setItem('accessToken', accessToken)
      router.push({ name: this.redirectRouteName })
    }
  },
  mutations: {
    formIsSending (state) {
      state.sending = true
    },
    formIsNotSending (state) {
      state.sending = false
    },
    setFormErrors (state, errors) {
      state.formErrors = errors
      state.nonFieldErrors = errors.non_field_errors ? errors.non_field_errors[0] : null
    },
    setFormField (state, payload) {
      const { fieldName, fieldValue } = payload
      if (!(fieldName && fieldValue)) {
        console.warn('Unable to set form field. Data: ', { fieldName, fieldValue })
        return
      }
      state.formData[fieldName] = fieldValue
    },
    clearFormErrors (state) {
      state.nonFieldErrors = {}
      state.formErrors = {}
    }
  },
  getters: {
    getFormErrors (state) {
      return state.formErrors
    },
    nonFieldErrors (state) {
      return state.nonFieldErrors
    },
    formBeingSent (state) {
      return state.sending
    },
    showField: (state) => field => {
      if (this.formFields.includes('all')) {
        return true
      }
      return this.formFields.includes(field)
    }
  },
  modules: {
  }
}
