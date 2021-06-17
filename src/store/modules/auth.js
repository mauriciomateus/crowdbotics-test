import axios from 'axios'
import router from './../../../router/router'
import { deleteAxiosAuthHeader, formIsNotSending, formIsSending, getFormErrors, setAxiosAuthHeader, setFormField } from '../../helpers'

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
      switch (formAction) {
        case 'login':
          context.dispatch('login')
          break
        case 'register':
          context.dispatch('register')
          break
        case 'passwordReset':
          context.dispatch('passwordReset')
          break
        default:
          alert('action not defined')
      }
    },
    login (context) {
      context.commit('formIsSending')
      context.dispatch('clearFormErrors')
      deleteAxiosAuthHeader()

      axios.post('/rest-auth/login/', context.state.formData)
        .then(response => {
          context.dispatch('storeToken', response)
          context.commit('formIsNotSending')
          setAxiosAuthHeader()
          router.push({ name: 'Dashboard.AppsIndex' })
        })
        .catch(error => {
          console.log(error)
          context.commit('setFormErrors', error.response.data)
          context.commit('formIsNotSending')
        })
    },
    register (context) {
      context.dispatch('clearFormErrors')
      context.commit('formIsSending')
      deleteAxiosAuthHeader()// Do not send header when password is sent
      axios.post('/rest-auth/registration/', context.state.formData)
        .then(response => {
          context.commit('clearFormData')
          context.commit('formIsSending')
          context.commit('setSuccessfulRegistration')
          context.dispatch('redirectAfterSuccessfulRegistration')
            .then(result => {
              setTimeout(function () {
                router.push({ name: 'Login' })
                context.commit('clearSuccessfulRegistration')
                context.commit('formIsNotSending')
              }, 3000)
            })
        })
        .catch(error => {
          console.log(error)
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
      context.dispatch('deleteToken')
      axios.post('/rest-auth/logout/')
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
    passwordReset (context) {
      context.commit('formIsSending')
      context.dispatch('clearFormErrors')

      axios.post('/rest-auth/password/reset/', context.state.formData)
        .then(response => {
          context.commit('formIsNotSending')
          context.dispatch('clearFormErrors')
          router.push({ name: 'PasswordResetMessage' })
        })
        .catch(error => {
          context.commit('formIsNotSending')
          context.commit('setFormErrors', error.response.data)
          console.log(error.response.data)
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
    },
    clearFormErrors (context) {
      context.commit('clearFormErrors')
    }
  },
  mutations: {
    formIsSending,
    formIsNotSending,
    setFormErrors (state, errors) {
      state.formErrors = errors
      state.nonFieldErrors = errors.non_field_errors ? errors.non_field_errors[0] : null
      // Edge cases
      if (errors.email && errors.email.email) {
        state.nonFieldErrors = errors.email.email[0]
      }
    },
    setFormField,
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
    getFormErrors,
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
