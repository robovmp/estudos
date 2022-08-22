new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        clickButton(){
            alert('Botão Clicado!')
        },
        pressKey(){
            this.valor = event.target.value
        }
    }
})