<template>
	<div id="app">
		<span>
			<button v-on:click="componente = 'Citacoes'">Citações</button>
			<button v-on:click="componente = 'Sobre'">Sobre</button>
		</span>
		<keep-alive>
			<component v-bind:is="componente" />
		</keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/CitacoesComponente'
import Sobre from './components/SobreComponente'

export default {
	components: { Citacoes, Sobre },
	data(){
		return {
			componente: 'Citacoes'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>