let nomes = prompt("Insira o nome do aluno")
let nota = Number(prompt("Qual foi a sua nota?"))
let resposta = prompt("deseja continuar? (sim/não)")

let continuar = true
let arrayNomes = []
let arrayNotas = []
let contador = 0


while (continuar){
 let nomes = prompt("Insira o nome do aluno")
 let nota = Number(prompt("Qual foi a sua nota?"))

        arrayNomes[contador] = nomes
        arrayNotas[contador] = nota
        contador++
 let resposta = prompt("deseja continuar? (sim/não)")

    if (resposta == "não"){
        continuar = false
    }
}

   
 



console.log("Notas dos alunos: ")
for(let i = 0; i < arrayNomes.lenght; i++){
    console.log(alunos[i] + " - " + nota[i])
}

let soma = 0
for(let i = 0; i < arrayNotas.length; i++){
    soma += arrayNotas[i] 
}
let media = soma / arrayNomes.length
console.log("A soma das notas foi: " + soma)
console.log("A média geral da turma foi: " + media)