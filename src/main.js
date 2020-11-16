import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 图标样式
import './styles/icon.less'
// 全局样式
import './styles/index.js'

import Vant from 'vant'
import 'vant/lib/index.css'
// 动态设置rem基准值
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
