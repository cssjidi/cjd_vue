import { ActionTypes as types } from '../types'
import _ from 'lodash'
import schema from '../modules/schema'
import base64 from '../../utils/Base64'
import ctx from '../modules/context'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  getters:{
    //accessory: state => state.items,
    user: state => state.itemsById
  },
mutations: {
  [types.USER.FETCH_REQ](state,{payload}){

  },
  [types.USER.FETCH_OK](state,{ entities,result }){
    state.items = result
    state.itemsById = entities.user
    ctx.state.userName = state.itemsById[result].name
    ctx.state.userCode = state.itemsById[result].id
  },
  [types.USER.FETCH_ERR](state,{ error }){
    state.errorMessage = error
  },
},
actions: {
  fetchUser({commit},id){
    const CALL_API = {
      endpoint:`/user`,
      method:'GET',
      schema:schema.user
    }
    commit(types.USER.FETCH_REQ,{CALL_API})
  }
}
}
