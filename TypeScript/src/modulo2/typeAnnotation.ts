// Variáveis [Type Annotations]

let nome: string = 'Vinícius Martins';
console.log(nome);
// Arrays [Type Annotations]

let animais: string[] = ['elefante', 'gato', 'dog'];
console.log(animais);

// Objetos [Type Annotations]

let carro:{
    nome: string;
    ano: number;
    preco: number
}

carro = {nome: 'Uno', ano: 2007, preco: 13000 };
console.log(carro);

// Funções [Type Annotations]

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2
}

console.log( multiplicarNumero( 5, 5 ) );

