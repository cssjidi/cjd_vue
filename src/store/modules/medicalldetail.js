import { ActionTypes as types } from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../modules/schema'

export default {
  state: {
    items:[],
    itemsById:{}
  },
  getters:{
    medicaldetail: state => state.items,
},
mutations: {
  [types.MEDICALLLDETAIL.FETCH_REQ](state,{payload}){

  },
  [types.MEDICALLLDETAIL.FETCH_OK](state,{ entities,result }){
    state.items = result
    state.itemsById = entities.medicaldetail
  },
  [types.MEDICALLLDETAIL.FETCH_ERR](state,{ error }){
    state.errorMessage = error
  },
},
actions: {
  fetchMedicalldetail({commit},id){
    const CALL_API = {
      endpoint:`/api/app/mngHealth/medicalInform/${id}`,
      method:'GET',
      schema:schema.medicaldetail
    }
    commit(types.MEDICALLLDETAIL.FETCH_REQ,{CALL_API})
  }
}
}
