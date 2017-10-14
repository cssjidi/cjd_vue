import MD5 from 'crypto-js/md5'
import { ActionTypes as types } from '../types'
import _ from 'lodash'
import axios from 'axios'
import schema from '../modules/schema'
import stream from '../../middleware/api'
import {API_ROOT} from '../../config'
import ctx from './context'
import '../../utils/pinyin4js';
export default {
  state: {
    items:[],
    itemsById:{}
  },
  getters:{
    downloadLink: state => {

    }
  },
mutations: {
  [types.DOWNLOAD.FETCH_REQ](state,{payload}){

  },
  [types.DOWNLOADFILE.FETCH_REQ](state,{payload}){

  },
  [types.DOWNLOADFILE.FETCH_OK](state,{ result,entities}){

  },
  [types.DOWNLOADFILE.FETCH_ERR](state,{ result,entities}){

  },
  [types.DOWNLOAD.FETCH_OK](state,{ result,entities}){
    const isEhome = ctx.state.ssoToken ? 'e' : 'b'
    state.items = result
    state.itemsById = entities
    const new_name = PinyinHelper.convertToPinyinString(entities.filename, '', PinyinFormat.WITHOUT_TONE)
    const lower_name = new_name.toLowerCase()
    const downloadLink = API_ROOT+`/api/app/fileoper/downloadfile/${entities.id}/${isEhome}/${entities.random}?ehome_file_savename=${lower_name}&ehome_file_from=ehomehealth`
    console.log(downloadLink)
    const aElement = document.createElement('a')
    const href = document.createAttribute("href")
    href.nodeValue = downloadLink
    aElement.setAttributeNode(href)
    document.body.appendChild(aElement)
    aElement.click()
    document.body.removeChild(aElement)
  },
  [types.DOWNLOAD.FETCH_ERR](state,{ error }){
    state.errorMessage = error
  },
},
actions: {
    downloadFile({commit},{file}){
    const random = MD5(Math.random().toString()).toString()
      const CALL_API = {
        method:'get',
        endpoint:`/api/app/fileoper/${random}`,
        schema:schema.download,
      }
      commit(types.DOWNLOAD.FETCH_REQ,{CALL_API,file})
    }
}
}
