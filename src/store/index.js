import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    simulateIsLoggedIn: false,
    simulateIsLoadingLogIn: false,
    useOpenlyTheme: false
  },
  mutations: {
    toggleOpenlyTheme (state) {
      state.useOpenlyTheme = !state.useOpenlyTheme
    },
    toggleSimulatedLoginState (state) {
      state.simulateIsLoggedIn = !state.simulateIsLoggedIn
    },
    toggleSimulatedLoginLoadingState (state) {
      state.simulateIsLoadingLogIn = !state.simulateIsLoadingLogIn
    }
  },
  actions: {
    toggleOpenlyTheme (context) {
      context.commit('toggleOpenlyTheme')
    },
    toggleSimulatedLoginState (context) {
      context.commit('toggleSimulatedLoginState')
    },
    toggleSimulatedLoginLoadingState (context) {
      context.commit('toggleSimulatedLoginLoadingState')
    }
  },
  modules: {
  }
})
