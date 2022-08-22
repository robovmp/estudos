import Vue from 'vue'
import App from './App.vue'
import ContadoresComponente from './ContadoresComponente.vue'

Vue.config.productionTip = false

Vue.component('app-contadores', ContadoresComponente)

new Vue({
  render: h => h(App),
}).$mount('#app')
