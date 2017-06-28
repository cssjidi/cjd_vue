import { normalize} from 'normalizr'
import { camelizeKeys } from 'humps'
import _ from 'lodash'
import schema from '../store/schema'

const API_ROOT = 'http://localhost:3030'

const callApi = options => {
    const { method, contentType = 'application/json;utf-8',endpoint, body,schema  } = options
    const _schema = schema
    if (!method) {
        throw new Error('Specify an HTTP method.')
    }

    if (method === 'GET' && !schema) {
        throw new Error('Specify one of the exported Schemas.')
    }

    const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
    const date = (new Date()).toUTCString()
    const jsonBody = JSON.stringify(body)

    return fetch(fullUrl, {
        method:method,
        headers: {
            Accept: 'application/json',
            //'Content-Type': contentType,
        },
        body: jsonBody,
    })
    .then((response)=>{
        if (!response.ok) {
            return Promise.reject(response)
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
        model(store)
        //store.registerModule('posts')
        const payload = mutation.payload
        const succeded = `${mutation.type}_OK`
        const error = `${mutation.type}_ERR`
        if(!payload.CALL_API){
            return
        }

        const promise = callApi(payload.CALL_API)

        promise.then((response)=>{
            store.commit(succeded, response)
        },(errorMessage) => {
            //console.log(error)
            store.commit(error, errorMessage)
        })
})
}

const model = store => {
    _.mapValues(schema, (item,key) => {
        store.registerModule(['orm',key],item)
    })
    //console.log(schema,typeof schema)
}

export default apiMiddlewarePlugin