import types from '../types'
import _ from 'lodash'
import medicalinform from './medicalInform'
import context from './context'
import session from './session'
import signin from './signin'
import medicaldetail from './medicalldetail'
import user from './user'
import download from './download'
import medicallreport from './medicallreport'
import token from './token'
import post from './post'
import image from './image'

export default {
  modules:{
    post,
    image,
    context,
    signin,
	user,
  }
}
