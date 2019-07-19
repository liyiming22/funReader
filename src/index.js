import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import myTouchPlugin from '@/utils/vueTouch'
import VueTimeago from 'vue-timeago'
import '@/assets/style/reset.css'
import { PullRefresh, List, Cell, Tabbar, TabbarItem, Icon, Lazyload } from 'vant'
import './utils/iconfont'

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'zh-CN'
})
Vue.use(myTouchPlugin)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Tabbar).use(TabbarItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// if (module.hot) {
//   module.hot.accept()
// }