import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
import App from './app'
import router from './router'    //这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
import title from './components/directives/title';
import store from './store';
Vue.use(InfiniteScroll);
// 引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.directive('title', title);
import  { ToastPlugin } from 'vux';
Vue.use(ToastPlugin);

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',    //这里绑定的是index.html中的id为app的div元素
  router,
  store,
  render: h => h(App)

  // 这里的render: h => h(App)是es6的写法
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(h){
  // 	return h(App);
  // });

})