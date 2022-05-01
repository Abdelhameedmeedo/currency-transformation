import Vue from 'vue'
import App from './App.vue'
import responsive from 'vue-responsive'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(responsive)
new Vue({
  render: h => h(App),
}).$mount('#app')
