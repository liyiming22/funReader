import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import myTouchPlugin from '@/utils/vueTouch'
import VueTimeago from 'vue-timeago'
import '@/assets/style/reset.css'
import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less'
import { BottomNav, Icon } from 'muse-ui'

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'zh-CN'
})
Vue.use(myTouchPlugin)
Vue.use(BottomNav)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// if (module.hot) {
//   module.hot.accept()
// }