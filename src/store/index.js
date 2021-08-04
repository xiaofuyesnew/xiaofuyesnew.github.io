import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      nav: '0'
    }
  },
  mutations: {
    changeNav(state, payload) {
      state.nav = payload.nav
    }
  }
})