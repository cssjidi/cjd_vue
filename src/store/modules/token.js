import { ActionTypes as types } from '../types'
import _ from 'lodash'
import NodeRSA from 'node-rsa'
import schema from '../modules/schema'
import ctx from '../modules/context'
import router from '../../router'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  mutations: {
    [types.SSO_TOKEN.FETCH_REQ](state){

    },
    [types.SSO_TOKEN.FETCH_OK](state,{result,entities}){
      // state.itemsById = entities
      // state.items = result
      ctx.state.ssoError = ''
      // ctx.state.USER_SIGNIN = true
      ctx.state.userName = result.userName
      ctx.state.userCode = result.userCode
      //location.href = 'http://127.0.0.1:8080/#/signin'
      //alert(ctx.state.USER_SIGNIN)
      router.push({
        path: 'medicall/info.index'
      });
    },
    [types.SSO_TOKEN.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    },
  },
  actions: {
    fetchToken({commit}){
      const rsaPublicKey = ctx.state.rsaKey
      const keyData = `-----BEGIN PUBLIC KEY-----\n${rsaPublicKey}\n-----END PUBLIC KEY-----`
      const key = new NodeRSA()
      key.importKey(keyData, 'pkcs8-public-pem')
      const loginAccount = ctx.state.userCode
      const token = ctx.state.ssoToken
      const device = ctx.state.deviceId
      const accessKey = ctx.state.accessKey
      const secretKey = ctx.state.secretKey
      const data = {
        loginAccount,
        token,
        device,
        accessKey,
        secretKey,
      }
      const encoded = key.encrypt(data, 'base64')
      const CALL_API = {
        endpoint:`/api/app/sso/tokens/${accessKey}`,
        method:'POST',
        schema:schema.token,
        body: encoded,
      }
      commit(types.SSO_TOKEN.FETCH_REQ,{CALL_API})
    }
  }
}
