import NodeRSA from 'node-rsa'
import schema from '../modules/schema'
import { ActionTypes as types } from '../types'
import ctx from './context'
import router from '../../router'

const rsaBase64 = (rsaPublicKey, data) => {
  const keyData = `-----BEGIN PUBLIC KEY-----\n${rsaPublicKey}\n-----END PUBLIC KEY-----`
  const key = new NodeRSA()
  key.importKey(keyData, 'pkcs8-public-pem')
  return key.encrypt(data, 'base64')
}

export default {
  state: {
    items:[],
    itemsById:{},
  },
  mutations: {
    [types.SSO_SIGN_IN.FETCH_REQ](state){
    },
    [types.SSO_SIGN_IN.FETCH_OK](state,{result,entities}){
      ctx.state.token = entities.signin[result].token
      ctx.state.expired = entities.signin[result].expiredAt
      ctx.state.refreshExpired = entities.signin[result].refreshExpiredAt
      ctx.state.USER_SIGNIN = true
    },
    [types.SSO_SIGN_IN.FETCH_ERR](state,payload){
      ctx.state.ssoError = payload.message
      //ctx.state.token = payload.
    },
  },
  actions: {
    signin({commit, state,rootState },{params}){
      let formData = new FormData()
      formData.append('password',params.password)
      formData.append('email',params.email)
      let UrlParams = new URLSearchParams();
      UrlParams.append('password',params.password)
      UrlParams.append('email',params.email)
      const CALL_API = {
        //endpoint:`/authorizations?email=4@3.com&password=123456`,
        endpoint:`/authorizations`,
        method:'POST',
        schema:schema.signin,
        contentType:'application/x-www-form-urlencoded',
        //contentType:'multipart/form-data',
        body:UrlParams,
      }
      commit(types.SSO_SIGN_IN.FETCH_REQ,{CALL_API})
    },
  }
}
