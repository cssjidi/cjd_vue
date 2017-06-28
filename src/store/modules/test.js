import types from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../schema'

export default {
    state: {
        items:[],
        itemsById:{}
    },
    mutations: {
        [types.TEST.TEST_FETCH](state,{payload}){
            
        },
        [types.TEST.TEST_FETCH_OK](state,{ entities,result }){
            //console.log(entities,result)
            //items.push()
            state.items = result
            state.itemsById = entities.posts
        },
        [types.TEST.TEST_FETCH_ERR](state,{ error }){
            state.errorMessage = error
        }
    },
    actions: {
        loadProducts: ({commit,params}) => {
            const CALL_API = {
                    endpoint:`/static/data.json`,
                    method:'GET',
                    schema:[schema.posts]
            }
            commit(types.TEST.TEST_FETCH,{CALL_API})
        }
    }
}
