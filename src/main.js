// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import router from './router'
import util from './lib/utils'
Vue.use(MintUI)
Vue.use(util) // 使用公共方法
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
