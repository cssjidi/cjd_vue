import { ActionTypes as types } from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../modules/schema'
import ctx from './context'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  getters:{
    medicallFormList: state => state.itemsById,

  },
  mutations: {
    [types.MEDICALLINFORM.FETCH_REQ](state,{payload}){

    },
    [types.MEDICALLINFORM.FETCH_OK](state,{ entities,result }){
      state.items = result
      const list = _.sortBy(entities.medicalinform,item=>{return -item.id})
      state.itemsById = list
    },
    [types.MEDICALLINFORM.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    },
  },
  actions: {
      fetchMedicallinfo({commit,state}){
        const CALL_API = {
          endpoint:`/api/app/mngHealth/medicalInform/list`,
          method:'GET',
          schema:[schema.medicalinform]
        }
        if(state.items.length){
          return
        }
        commit(types.MEDICALLINFORM.FETCH_REQ,{CALL_API})
      },
      loadFinished({commit}){
        commit(types.CONTEXT.SET,{isFinished:false})
      }
  }
}
