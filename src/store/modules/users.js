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
        [types.USERS.USERS_FETCH](state,{payload}){

        },
        [types.USERS.USERS_FETCH_OK](state,{ entities,result }){
            //console.log(entities,result)
            //items.push()
            state.items = result
            state.itemsById = entities.users
        },
        [types.USERS.USERS_FETCH_ERR](state,{ entities }){
        }
    },
    actions: {
        getUsers: ({commit,params}) => {
            const CALL_API = {
                endpoint:`http://localhost:8080/static/data.json`,
                method:'GET',
                schema:[schema.users]
            }
            commit(types.USERS.USERS_FETCH,{CALL_API})
        }
    }
}
