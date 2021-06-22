export default {
  namespaced: true,
  state: {
    subscriptionsModalIsOpen: false,
    currentApp: {}
  },
  actions: {
    launchSubscriptionsModal (context, app) {
      context.commit('setSubscriptionsModalIsOpen')
      context.commit('setCurrentApp', app)
    }
  },
  mutations: {
    setSubscriptionsModalIsOpen (state) {
      state.subscriptionsModalIsOpen = true
    },
    setCurrentApp (state, app) {
      state.currentApp = app
    }
  },
  getters: {
    getSubscriptionsModalIsOpen (state) {
      return state.subscriptionsModalIsOpen
    },
    getCurrentApp (state) {
      return state.currentApp
    }
  }
}
