let numInserido = []
let arrayInvertido = []

//criar uma mensagem de erro se for maior que 10
let num = parseInt(prompt("insira um número"))

for(let i = 0; i < 10; i++ ){
    numInserido[i] = numInserido[i - 1] + numInserido[i - 2];
    numInserido[1] = num;
    numInserido[0] = num - 1;
    
    
}

    console.log("Array Fibonacci: " + numInserido)
//sempre pegar o i atual -1 e -2 e somar eles  