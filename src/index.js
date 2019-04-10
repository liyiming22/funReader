import Vue from 'vue'
import App from './App'

console.log('testOoK!!!')

new Vue({
  render: h => h(App)
}).$mount('#app')

if (module.hot) {
  module.hot.accept()
}