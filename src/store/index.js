import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import orm from './modules'
import * as state from './state'
import * as getters from './getters'
import apiMiddlewarePlugin from '../middleware/api'


Vue.use(Vuex);
export default new Vuex.Store({
    plugins:[createLogger({collapsed:false}),apiMiddlewarePlugin],
    state:{
        errorMessage:null,
        routing:{}
    },
    getters,
    modules:{
        orm:orm,
    },
})

