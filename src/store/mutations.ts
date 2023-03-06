import type { MutationTree } from 'vuex'
import type { StoreState } from './state'

export enum MutationTypes {
  TOGGLE_MODAL = 'TOGGLE_MODAL'
}

export type Mutations<S = StoreState> = {
  [MutationTypes.TOGGLE_MODAL](state: S): void
}

export const mutations: MutationTree<StoreState> & Mutations = {
  [MutationTypes.TOGGLE_MODAL](state) {
    state.showInvoiceModal = !state.showInvoiceModal
    console.log(state)
  }
}
