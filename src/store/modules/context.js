import types from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../schema'

export default {
    state: {
        items:[],
        itemsById:{}
    },
    getters:{
        products: state => state.all
    },
    mutations: {
        [types.CONTEXT.CONTEXT_FLUSH](state,{payload}){

        },
        [types.CONTEXT.CONTEXT_SET](state,{payload}){
            console.log(payload)
        },
        [types.CONTEXT.CONTEXT_PUSH](state,{payload}){
        }
    },
    actions: {
        setContext: ({commit,payload}) => {
            commit(types.CONTEXT.CONTEXT_SET,{payload})
        }
    }
}
