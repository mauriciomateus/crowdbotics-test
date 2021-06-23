import axios from 'axios'

export function setAxiosAuthHeader () {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken && accessToken.length) {
    axios.defaults.headers.common.Authorization = `token ${accessToken}`
  }
}

export function deleteAxiosAuthHeader () {
  delete axios.defaults.headers.common.Authorization // Do not send header when password is sent
}

export function setFormField (state, payload) {
  const { fieldName, fieldValue } = payload
  if (!(fieldName && fieldValue)) {
    console.warn('Unable to set form field. Data: ', { fieldName, fieldValue })
    return
  }
  state.formData[fieldName] = fieldValue
}

export function getFormErrors (state) {
  return state.formErrors
}

export function setFormErrors (state, errors) {
  state.formErrors = errors
}
export function resetFormErrors (state, errors) {
  state.formErrors = { errors }
}
