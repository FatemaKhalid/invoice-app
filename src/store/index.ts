import { createStore } from 'vuex'
import { state } from './state'

export default createStore({
  state,
  mutations: {
    TOGGLE_MODAL(state) {
      state.showInvoiceModal = !state.showInvoiceModal
    }
  },
  actions: {},
  modules: {}
})
