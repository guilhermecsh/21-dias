let perguntaM = prompt("Qual é o modelo do carro?")
let perguntaA = prompt("Qual é o ano do carro?")
let perguntaV = prompt("Qual é o valor do carro?")
let maisUma = prompt("Você deseja inserir mais informações? (sim/não)")

let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

modelos[contador] = perguntaM
anos[contador] = perguntaA
valores[contador] = perguntaV
contador++


while(continuar){
    let perguntaM = prompt("Qual é o modelo do carro?")
        modelos[contador] = perguntaM
    let perguntaA = prompt("Qual é o ano do carro?")
        anos[contador] = perguntaA
    let perguntaV = prompt("Qual é o valor do carro?")
        valores[contador] = perguntaV
        contador++

    let maisUma = prompt("Você deseja inserir mais informações? (sim/não)")

    if(maisUma == "não"){
        continuar = false
    }
}
console.log("Carros cadastrados: ")
for(let i= 0; i < modelos.length; i++){
console.log(modelos[i] + " - " + anos[i] + " - " + "Valor: " + valores[i])
}

for (let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++){
        if (valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço:")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - "  + valores[i])
}