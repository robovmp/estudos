new Vue({
    el:'#desafio',
    data:{
        nome:'Vinícius',
        idade:'19',
        linkImagem:'https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON-1180x620.jpg'
    },
    methods:{
        multiplicaIdade: function(){

            let convertido = parseInt(this.idade);

            const idadeMultiplicada= convertido*3;

            return idadeMultiplicada;
        },

        numeroAleatorio: function(){

            let aleatorio = Math.random();

            return aleatorio;
        }
    }

}) 