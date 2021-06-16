import axios from 'axios'
import router from './../../../router/router'

export default {
  namespaced: true,
  state: {
    sending: false,
    formData: {},
    formErrors: {},
    nonFieldErrors: {},
    successfulRegistration: false
  },
  actions: {
    redirectIfAuthenticated (context) {
      if (!localStorage.getItem('accessToken')) {
        return
      }
      router.push({ name: 'Dashboard.AppsIndex' })
    },
    handleFormSubmit (context, params) {
      const { formAction } = params
      console.log({ formAction })
      switch (formAction) {
        case 'login':
          context.dispatch('login')
          break
        case 'register':
          context.dispatch('register')
          break
        default:
          alert('action not defined')
      }
      // const { endPoint } = params
      // context.commit('formIsSending')
      // context.commit('clearFormErrors')
      // axios.post(endPoint, context.state.formData)
      //   .then(response => {
      //     context.commit('formIsNotSending')
      //     console.log(response)
      //     context.dispatch('storeToken', response)
      //   })
      //   .catch(error => {
      //     const theError = error.response.data
      //     console.log('the error', theError)
      //     if (theError.detail && theError.detail.trim().toLowerCase().includes('invalid token')) {
      //       delete axios.defaults.headers.common.Authorization
      //       // localStorage.removeItem('accessToken')
      //       context.dispatch('handleFormSubmit', params)// Try to log in again
      //     }
      //     context.dispatch('deleteToken')
      //     context.commit('setFormErrors', error.response.data)
      //     context.commit('formIsNotSending')
      // Temporary just to test redirect without creating an account
      // this.handleRedirect()
      // })
    },
    login (context) {
      context.commit('formIsSending')
      context.commit('clearFormErrors')
      delete axios.defaults.headers.common.Authorization // Do not send header when password is sent
      axios.post('/rest-auth/login/', context.state.formData)
        .then(response => {
          console.log(response.data)
          context.dispatch('storeToken', response)
          router.push({ name: 'Dashboard.AppsIndex' })
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          context.commit('setFormErrors', error.response.data)
          context.commit('formIsNotSending')
        })
    },
    register (context) {
      context.commit('clearFormErrors')
      context.commit('formIsSending')
      delete axios.defaults.headers.common.Authorization // Do not send header when password is sent
      axios.post('/rest-auth/registration/', context.state.formData)
        .then(response => {
          context.commit('clearFormData')
          context.commit('formIsSending')
          context.commit('setSuccessfulRegistration')
          context.dispatch('redirectAfterSuccessfulRegistration')
            .then(result => {
              console.log(result)
              setTimeout(function () {
                router.push({ name: 'Login' })
                context.commit('clearSuccessfulRegistration')
                context.commit('formIsNotSending')
              }, 3000)
            })
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          context.commit('setFormErrors', error.response.data)
          context.commit('formIsNotSending')
        })
    },
    redirectAfterSuccessfulRegistration (context) {
      return new Promise((resolve, reject) => {
        resolve(
          setTimeout(function () {
            context.commit('setSuccessfulRegistration')
          }, 1000)
        )
      })
    },
    logOut (context) {
      axios.post('/rest-auth/logout/')
      context.dispatch('deleteToken')
        .then(response => {
          if (router.currentRoute.name === 'Login') {
            return
          }
          router.push({ name: 'Login' })
        })
        .catch(error => {
          console.log(error)
          if (router.currentRoute.name === 'Login') {
            return
          }
          router.push({ name: 'Login' })
        }
        )
    },
    storeToken (context, response) {
      const { data } = response
      const accessToken = data && data.key ? data.key : ''
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
      }
    },
    deleteToken (context) {
      localStorage.removeItem('accessToken')
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
    },
    clearFormData (state) {
      state.formData = {}
    },
    setSuccessfulRegistration (state) {
      state.successfulRegistration = true
    },
    clearSuccessfulRegistration (state) {
      state.successfulRegistration = false
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
  modules: {}
}
