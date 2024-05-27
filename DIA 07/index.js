let mediaGeral = 0
let qtdHomens = 0
let qtdW7 = 0
let maiorNotaH = 0
let contador = 1

while(contador <=10){
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if(sexo =="m"){
        if(nota > maiorNotaH){
            maiorNotaH = nota
        }
        qtdHomens++
    }

    if (sexo == "f" && nota > 7){
        qtdW7++
    } 

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A media geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de Homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de Mulheres com nota acima de 7 foi: " + qtdW7)
console.log("A maior nota entre os Homens foi: " + maiorNotaH)




