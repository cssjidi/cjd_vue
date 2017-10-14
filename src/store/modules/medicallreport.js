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
    medicallReportList: state => state.itemsById
  },
  mutations: {
    [types.MEDICALLREPORT.FETCH_REQ](state,{payload}){

    },
    [types.MEDICALLREPORT.FETCH_OK](state,{ entities,result }){
      state.items = result
      state.itemsById = entities.medicallreport
    },
    [types.MEDICALLREPORT.FETCH_ERR](state,{ error }){
      state.errorMessage = error
    }
  },
  actions: {
      fetchMedicallReport: ({commit,state},useCode) => {
        const CALL_API = {
          endpoint:`/api/app/mngHealth/medicalReport/list/${useCode}`,
          method:'GET',
          schema:[schema.medicallreport]
        }
        if(state.items.length){
          return
        }
        commit(types.MEDICALLREPORT.FETCH_REQ,{CALL_API})
    }
  }
}
