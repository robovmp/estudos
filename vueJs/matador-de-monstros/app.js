new Vue({
	el: '#desafio',
	data: {
		newGame: true,
		widthMonstro: 100,
		widthJogador: 100,
		arrayDanoRecebido: new Array(),
		arrayDanoCausado: new Array(),
		arrayDanoCurado: new Array(),
		boolean:{
			perdeu: false,
			empate: false,
			venceu: false
		}
	},
	watch:{
		widthMonstro(){
			this.verificarJogo()
		},
		widthJogador(){
			this.verificarJogo()
		}
	},
	methods:{
		verificarJogo(){
			if(this.widthJogador == 0 && this.widthMonstro > 0){
				this.boolean.perdeu = true
				this.newGame = true
			}
			if(this.widthJogador > 0 && this.widthMonstro == 0){
				this.boolean.venceu = true
				this.newGame = true
			}
			if(this.widthJogador == 0 && this.widthMonstro == 0){
				this.boolean.empate = true
				this.newGame = true
			}
		},
		iniciarJogo(){
			this.newGame = !this.newGame

			this.boolean.venceu = false
			this.boolean.empate = false
			this.boolean.perdeu = false

			this.arrayDanoRecebido = new Array()
			this.arrayDanoCausado = new Array()
			this.arrayDanoCurado = new Array() 

			this.widthJogador = 100
			this.widthMonstro = 100
		},
		ataque(){
			let danoRecebido = gerarAleatorio(20)
			let danoCausado = gerarAleatorio(15)

			if(this.widthJogador  >= 0){

				this.widthJogador = this.widthJogador - danoRecebido
				if(this.widthJogador < 0){
					this.widthJogador = 0
				}
			}
			if(this.widthMonstro  >= 0){

				this.widthMonstro = this.widthMonstro - danoCausado
				if(this.widthMonstro < 0){
					this.widthMonstro = 0
				}
			}
			this.arrayDanoRecebido.push(danoRecebido)
			this.arrayDanoCausado.push(danoCausado)
		},
		ataqueEspecial(){

			let danoRecebido = gerarAleatorio(15)
			let danoCausado = gerarAleatorio(20)

			if(this.widthJogador  >= 0){

				this.widthJogador = this.widthJogador - danoRecebido
				if(this.widthJogador < 0){
					this.widthJogador = 0
				}
			}
			if(this.widthMonstro  >= 0){

				this.widthMonstro = this.widthMonstro - danoCausado
				if(this.widthMonstro < 0){
					this.widthMonstro = 0
				}
			}
			this.arrayDanoRecebido.push(danoRecebido)
			this.arrayDanoCausado.push(danoCausado)

		},
		curar(){
			let danoCurado = gerarAleatorio(25)
			let danoRecebido = gerarAleatorio(15)

			if(this.widthJogador  >= 0){

				this.widthJogador = this.widthJogador - danoRecebido

				this.widthJogador += danoCurado 

				if(this.widthJogador < 0){

					this.widthJogador = 0
				}
				if(this.widthJogador > 100){
					
					this.widthJogador = 100
				}
			}
			this.arrayDanoCurado.push(danoCurado)
			this.arrayDanoRecebido.push(danoRecebido)
			// console.log(this.widthJogador, this.danoCurado) 
			
		},
		desistir(){
			this.newGame = !this.newGame
			this.arrayDanoRecebido = new Array()
			this.arrayDanoCausado = new Array()
			this.arrayDanoCurado = new Array() 

			this.widthJogador = 100
			this.widthMonstro = 100
		},
		
	}
});

function gerarAleatorio( max ){
	return Math.floor( Math.random() * max + 1 )
}