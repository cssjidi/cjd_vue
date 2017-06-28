import * as types from './types'

export const setContext = ({commit}, {payload}) => {
    commit(types.CONTEXT.CONTEXT_SET,{payload})
}