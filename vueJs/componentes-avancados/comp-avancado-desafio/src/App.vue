<template>
	<div id="app">
		<span>
			<button class="vermelho" v-on:click="setVermelho" >Carregar Componente Vermelho</button>
			<button class="verde" v-on:click="setVerde" >Carregar Componente Verde</button>
			<button class="azul" v-on:click="setAzul" >Carregar Componente Azul</button>
		</span>
		
		<component v-bind:is="componente">
      <span>Conteúdo do Componente <strong>{{componente}}</strong></span>
    </component>
	</div>
</template>

<script>
import Vermelho from './components/VermelhoComp.vue'
import Verde from './components/VerdeComp.vue'
import Azul from './components/AzulComp.vue'

export default {
	name: 'app',
	components: { Vermelho, Verde, Azul },
  data(){
    return{
      componente: ''
    }
  },
  methods:{
    setVermelho(){
      this.componente = 'Vermelho'
    },
    setVerde(){
      this.componente = 'Verde'
    },
    setAzul(){
      this.componente = 'Azul'
    }
  }
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
