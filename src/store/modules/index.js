import types from '../types'
import _ from 'lodash'
import { CALL_API } from '../../middleware/api'
import schema from '../schema'
import test from './test'
import users from './users'
import context from './context'
export default {
    modules:{
        test,
        users,
        context
    }
}
