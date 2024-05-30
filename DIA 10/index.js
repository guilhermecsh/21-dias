/*
let num = ["Guilherme", "Gustavo", "Gabriel"];
let numInserido = parseInt(prompt("Insira um Número"));
console.log(num[numInserido]) 
*/

let numInserido = []
let arrayInvertido = []
let quantos = Number(prompt("Quantos números você deseja inserir?"))

for(let i = 0; i < quantos; i++ ){
    let num = parseInt(prompt(`Insira o ${i + 1}° número`))
    numInserido[i] = num
}

    console.log("Array: " + numInserido)

    //arrayInvertido = numInserido.slice().reverse();

    let contador = quantos - 1

    for(let i = 0; i < quantos; i++){
        arrayInvertido[i] = numInserido[contador]
        contador--
    }
    console.log("Array invertido: " + arrayInvertido)





