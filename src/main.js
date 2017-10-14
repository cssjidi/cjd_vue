import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import fetch from './utils/fetch'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

