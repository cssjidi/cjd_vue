import { ActionTypes as types } from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../modules/schema'
import { API_ROOT } from '../../config'

export default {
  state: {
    rsaKey:'',
    accessKey:'',
    secretKey:'',
    ssoError:'',
    USER_SIGNIN:false,
    userName:'',
    userCode:'',
    downloadUrl:API_ROOT+'/api/app/mngHealth/',
    deviceId:'',
    token:'',
    expired:'',
    refreshExpired:'',
    headerTitle:'',
    urlPath:'',
    isFinished:true,
    pagination:{
      total: 0, 
      count: 20, 
      per_page: 0, 
      current_page: 1, 
      total_pages: 1,
    },
  },
  mutations: {
    [types.CONTEXT.SET](state,{title,path,isFinished,pagination}){
      state.headerTitle = title
      state.urlPath = path
      state.isFinished = isFinished
      state.pagination = pagination
    },
    [types.CONTEXT.FLUSH](state,{ payload }){

    },
    [types.CONTEXT.PUSH](state,{ error }){

    },
  },
  actions: {
    changeHeaderTitle({commit},{title,path}){
      commit(types.CONTEXT.SET,{title,path})
    },
    pagination({commit},{pagination}){
      commit(types.CONTEXT.SET,{pagination})
    }
  }
}





