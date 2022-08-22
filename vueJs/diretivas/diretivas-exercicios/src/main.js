import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.directive('destaque', {
	bind(el, binding){
		if(binding.arg === 'fundo'){
			el.style.backgroundColor = binding.value
		}else{
			el.style.color = binding.value
		}
		
		
		// el.style.backgroundColor = binding.value
		
		// el.style.backgroundColor = 'red'
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
