import Vue from 'vue'
import Router from 'vue-router'
const Main = resolve => { require(['@/pages/main/main'], resolve) }
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
