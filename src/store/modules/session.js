import { ActionTypes as types } from '../types'
import _ from 'lodash'
import schema from '../modules/schema'
import ctx from './context'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  mutations: {
    [types.RSA_KEY.FETCH_REQ](state){

    },
    [types.RSA_KEY.FETCH_OK]({ state },{token}){

    },
    [types.RSA_KEY.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    },
  },
  actions: {
    loadRsaKey({commit}){
      commit(types.RSA_KEY.FETCH_REQ,{})
    },
  }
}
