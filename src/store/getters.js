import _ from 'lodash'
import { Observable } from 'rxjs/Rx'
import ctx from './modules/context'

export default{
  ssoError: (state) => {
    return ctx.state.ssoError
  },
  isSignin: (state) => {
    return state.orm.context.USER_SIGNIN
  },
  userInfo: state => {
    return {
      userName:ctx.state.userName,
      userCode:ctx.state.userCode,
    }
  },
  download: state => {
    return ctx.state.downloadUrl
  },
  headerTitle: state =>{  
    return ctx.state.headerTitle
  },
  backPath: state =>{
    return ctx.state.urlPath
  },
  loadFinished: state => {
    return ctx.state.isFinished
  }
}
