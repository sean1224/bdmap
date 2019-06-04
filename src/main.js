// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import baiduMap from 'vue-baidu-map'
import '@/assets/styles/reset.css'
import '@/assets/styles/font.css'

Vue.config.productionTip = false
Vue.use(baiduMap, {
  ak: 'qKETBIx5q33Yv4OBNSrxgAG4ByPfgi7g'
})
let vm = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
Vue.use({vm})
