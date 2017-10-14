import MD5 from 'crypto-js/md5'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import EncBase64 from 'crypto-js/enc-base64'
import { normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import _ from 'lodash'
import schema from '../store/modules/schema'
//import module from '../store/modules'
import { API_ROOT } from '../config'
import ctx from '../store/modules/context'

const authorize = ({
  accessKey,
  secretKey,
  method,
  endpoint,
  body,
  contentType,
  date,
}) => {
  const verb = method.toUpperCase()
  const md5Body = MD5(!body ? '' : body)
  const stringToSign = `${verb}\n${endpoint}\n${md5Body}\n${contentType}\n${date}`
  const signature = HmacSHA256(stringToSign, secretKey).toString(EncBase64)
  return `HWMWS ${accessKey}:${signature}`
}

const callApi = options => {
  //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  const { method, contentType = 'application/json;charset=UTF-8',endpoint, body,schema } = options
  const _schema = schema

  if (!method) {
    throw new Error('Specify an HTTP method.')
  }

  if (method === 'GET' && !schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  //const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
  const fullUrl = API_ROOT + endpoint
  const date = (new Date()).toUTCString()

  const jsonBody = JSON.stringify(body)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': contentType,
  }
  if(ctx.state.token){
      const authorization = `Bearer ${ctx.state.token}`
      headers['Auth-Date'] = date
      headers['Authorization'] = authorization
      console.log(headers)
  }
console.log(1234123)
  return fetch(fullUrl,{
      method,
      headers,
      body,
    }).then((response)=>{
      if (!response.ok) {
        return Promise.reject(response.json())
      }
      const isNotJson = contentType.indexOf('json') < 0
      if(isNotJson){
        return response.text().then((json) => {
          json = JSON.parse(json)
          const camelizedJson = camelizeKeys(json)
          return normalize(camelizedJson.data, _schema)
        })
      }else{
        return response.json().then((json) => {
          const camelizedJson = camelizeKeys(json)
          return normalize(camelizedJson.data, _schema)
        })
      }
    })
}

const stream = options => {
  const { method, contentType = 'application/json;utf-8',endpoint, body,schema } = options
  const _schema = schema
  if (!method) {
    throw new Error('Specify an HTTP method.')
  }

  if (method === 'GET' && !schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  const random = MD5(Math.random().toString())

  const new_endpoint = endpoint + '/' + random
  const fullUrl = new_endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + new_endpoint : new_endpoint

  const date = (new Date()).toUTCString()
  const jsonBody = JSON.stringify(body)
  const authorization = authorize({
    accessKey:ctx.state.accessKey,
    secretKey:ctx.state.secretKey,
    method,
    new_endpoint,
    body: jsonBody,
    contentType,
    date,
  })

  return fetch(fullUrl,{
      method:method,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
        //'Auth-Date': date,
        //'authorization': authorization
      },
      body: body,
    }).then((response)=>{
      if (!response.ok) {
    return Promise.reject(response.json())
  }

  const isNotJson = contentType.indexOf('json') < 0
  return isNotJson ? response : response.json().then((json) => {
    const camelizedJson = camelizeKeys(json)

    return normalize(camelizedJson, _schema)
  })
})
}


const apiMiddlewarePlugin = store => {
  store.subscribe((mutation, state) => {
    //model(store)
    //store.registerModule('posts')
    const payload = mutation.payload
    const succeded_type = `${mutation.type}_OK`
    const error_type = `${mutation.type}_ERR`
    if(!payload.CALL_API){
    return
  }
  Object.assign(payload.CALL_API,{},)
  //const promise = mutation.type === 'DOWNLOAD_FETCH' ? stream(payload.CALL_API) : callApi(payload.CALL_API)
  const promise = callApi(payload.CALL_API)
  promise.then((response)=>{
    store.commit(succeded_type, response)
  },(error) => {
    error.then((error_message)=>{
      store.commit(error_type, error_message)
  })
  })
})
}

// const model = store => {
//   _.mapValues(module.modules, (item,key) => {
//     store.registerModule(['orm',key],item)
// })
// }

export default apiMiddlewarePlugin
