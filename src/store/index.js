import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import api from '../middleware/api'
import orm from './modules'
import getters from './getters'

Vue.use(Vuex)

const logger = createLogger({collapsed:false})
const plugin = process.env.NODE_ENV !== 'production' ? [logger] : []

plugin.push(api)

const store = new Vuex.Store({
  modules: {
    orm:orm
  },
  getters,
  plugins:plugin,
})
export default store
