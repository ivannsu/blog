import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Development
// Vue.prototype.$baseurl = 'http://localhost:3001'

// Production
Vue.prototype.$baseurl = 'https://pacific-castle-72119.herokuapp.com'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
