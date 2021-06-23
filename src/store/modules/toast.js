export default {
  namespaced: true,
  state: {
    toastInfo: {
      type: '',
      title: '',
      message: ''
    }
  },
  actions: {

  },
  mutations: {
    setToastInfo (state, info) {
      state.toastInfo = info
    },
    clearToastInfo (state) {
      state.toastInfo = {}
    }
  },
  getters: {
    getToastInfo (state) {
      return state.toastInfo
    }
  }
}
