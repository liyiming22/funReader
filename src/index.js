import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import '@/assets/reset.css'
import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less'
import { BottomNav, Icon } from 'muse-ui'

Vue.use(BottomNav, Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (module.hot) {
  module.hot.accept()
}