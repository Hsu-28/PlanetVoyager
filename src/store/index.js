import { createStore } from 'vuex'

export default createStore({
  state: {
    siteLoading: false,

  },
  getters: {
  },
  mutations: {
    updateSiteLoad(state, value) {
      state.siteLoading = value
    }
  },
  actions: {
  },
  modules: {
  }
})
