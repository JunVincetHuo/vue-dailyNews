import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index' // 首页
import NewsDetail from '@/pages/NewsDetail' // 新闻详情页
import ThemeDetail from '@/pages/ThemeDetail' // 主题列表页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index', // 首页  
      component: Index
    },
    {
      path:'/newsDetail/:id',
      name:'newsDetail',
      component:NewsDetail
    },
    {
      path:'/themeDetail/:id',
      name:'themeDetail',
      component:ThemeDetail
    }
  ]
})
