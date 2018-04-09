import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index' // 首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index', // 首页  
      component: Index
    }
  ]
})
