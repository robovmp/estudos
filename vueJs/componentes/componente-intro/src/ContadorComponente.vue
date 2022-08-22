
<template>
    <div class="contador">
        <span> {{contador}} </span>
        <button v-on:click="adicionar">+</button>
        <button v-on:click="subtrair">-</button>
    </div>
    
</template>

<script>


export default {
    data(){
        return{
            contador: 0
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
 
}


</script>

<style>
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        outline: none;
    }

</style>
