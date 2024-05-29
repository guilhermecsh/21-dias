let nome = prompt("Insira seu nome")
let idade = Number(prompt("Insira sua idade"))
let salario = parseFloat(prompt("Insira seu salário"))

console.log(`Olá ${nome}, você tem ${idade} anos e seu salário é R$${salario}`)

let confirmar = prompt("Suas informações estão corretas? (sim/não)")

while(confirmar == "não"){
    let nome = prompt("Insira seu nome")
let idade = Number(prompt("Insira sua idade"))
let salario = Number(prompt("Insira seu salário"))

console.log(`Olá ${nome}, você tem ${idade} anos e seu salário é R$${salario}`)

let confirmar = prompt("Suas informações estão corretas? (sim/não)")
}


let aumento = 0.015
console.log("Previsão do aumento salarial para os próximos 10 anos: ")

for (let ano = 1; ano <=10; ano++){
    salario += salario * aumento
    aumento *= 2

    console.log((2024 + ano) + " = R$ " + salario)

}




