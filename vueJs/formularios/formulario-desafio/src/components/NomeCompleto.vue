<template> 
    <div>
        <Rotulo nome="Nome">
            <input type="text" placeholder="Nome" 
            v-bind:value="value.nome"
            v-on:input="alterarNome"
            >
        </Rotulo>

        <Rotulo nome="Sobrenome">
            <input type="text" placeholder="Sobrenome" 
            v-bind:value="value.sobrenome" 
            v-on:input="alterarSobrenome"
            >
        </Rotulo> 
    </div>
</template>

<script>
import Rotulo from './RotuloComp.vue'
export default {
    components:{Rotulo},
    props:{
        value: {
            type: Object
        }
    },
    methods:{
        alterarNome(event){
            this.$emit('input', {nome: event.target.value, sobrenome: this.value.sobrenome})
        },
        alterarSobrenome(event){
            this.$emit('input', {nome: this.value.nome , sobrenome: event.target.value})
        }
    }
    }
</script>

<style>
    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }


    input:focus {
        border: 1px solid #BBB;
    }
</style>