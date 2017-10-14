import { ActionTypes as types } from '../types'
import _ from 'lodash'
import schema from '../modules/schema'
import ctx from './context'

export default {
  state: {
    items:[],
    itemsById:{},
    page:1,
    hasMore:true
  },
  getters:{
    postList: state => {
      return state.itemsById
    },
    postListLength: state => {
      return state.items.length
    },
    hasMore: state => state.hasMore
  },
  mutations: {
    [types.POST.FETCH_REQ](state,{payload}){

    },
    [types.POST.FETCH_OK](state,{ entities,result }){
      console.log(entities)
      const items = entities.post
      if(result.length === 0){
        state.hasMore = false
        return
      }
      if(state.items.length === 0){
        state.items = result
        state.itemsById = entities.post
        
      }else{
        for (const id in items){
          if (items.hasOwnProperty(id) && !state.itemsById[items[id]['postId']]){
            state.items.push(items[id]['postId']);
            state.itemsById[items[id]['postId']] = items[id]
          }
        }
        // Object.keys(items).forEach((key) => {
        //     //this.comments.set(key, items[key])
        //     console.log(key)
        //     state.itemsById[(]key, items[key])
        // })
        /*
        for (const id in items){
          if (items.hasOwnProperty(id) && !state.itemsById[items[id]['postId']]){
            state.items.push(items[id]['postId']);
            state.itemsById[items[id]['postId']] = items[id]
          }
        }
        */
      }
      state.hasMore = true
      state.page++
      console.log(state.page)
    },
    [types.POST.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    },
  },
  actions: {
      fetchPostList({commit,state}){
        console.log(state)
        const endpoint = `/post/?page=${state.page}`
        const CALL_API = {
          endpoint:endpoint,
          method:'GET',
          schema:schema.post
        }
        commit(types.POST.FETCH_REQ,{CALL_API})
      },
  }
}
