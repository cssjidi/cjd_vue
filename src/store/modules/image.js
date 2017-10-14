import { ActionTypes as types } from '../types'
import _ from 'lodash'
import schema from '../modules/schema'
import ctx from './context'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  getters:{
    imageList: state => state.itemsById,
  },
  mutations: {
    [types.IMAGE.FETCH_REQ](state,{payload}){

    },
    [types.IMAGE.FETCH_OK](state,{ entities,result }){
      //if(state.items.length === 0){
          state.items = result
          state.itemsById = entities.image
        // }else{
        //   for (const id in items){
        //     if (items.hasOwnProperty(id) && !state.itemsById[items[id]['imageId']]){
        //       state.items.push(items[id]['imageId']);
        //       state.itemsById[items[id]['imageId']] = items[id]
        //     }
        //   }
        // }
    },
    [types.IMAGE.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    },
  },
  actions: {
      fetchImageList({commit,state},postId){
        const CALL_API = {
          endpoint:`/post/${postId}/image`,
          method:'GET',
          schema:schema.image
        }
        commit(types.IMAGE.FETCH_REQ,{CALL_API})
      },
  }
}
