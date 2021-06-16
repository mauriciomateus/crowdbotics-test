export default {
  namespaced: true,
  getters: {
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
  }
}
