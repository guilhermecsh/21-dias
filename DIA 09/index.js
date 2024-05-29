let nome = prompt("Qual é o seu nome?")
let idade = parseInt(prompt("Qual é a sua idade?"));

let peso = Number(prompt("Qual é o seu peso?"))
let altura = Number(prompt("Qual é a sua altura?"))
let profissão = prompt("Qual é a sua profissão?")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissão}, tem ${altura}m de altura e pesa ${peso}kg.`)

if(idade >= 18){
    console.log("Está liberado para tomar umas geladas!")
    }else{
        console.log("Sem gelada para você!")
    }
console.log(`Você tem ${idade * 12} meses ou ${idade * 52} semanas ou ${idade * 365} dias de idade, Nasceu em ${2023 - idade}`)


//segunda parte

let imc = 0
 imc = parseFloat(peso / (altura * altura))
    if(imc < 18.5){
    console.log("Seu imc é " + imc + "kg/m², você está no nível: Magreza");

    } else if(imc = 18.5 && imc <= 24.9) {
        console.log("Seu imc é " + (imc) + " kg/m², você está no nível: Normal");

    } else if(imc = 24.9 && imc <= 30) {
        console.log("Seu imc é " + imc + "kg/m², você está no nível: Sobrepeso");
    } else {
        console.log("Seu imc é " + imc + "kg/m², você está no nível: Obesidade");
    }

//terceira parte

let ano = Number(2023)
let nasc = 2023 - idade

for(idade > 0; nasc < ano; idade--, ano--){ 
    console.log(`em ${ano} Você tinha ${idade} anos`)
}    console.log(`Em ${nasc} você nasceu`)

    let continuar = prompt("Deseja inserir novos dados? (sim/não)");

 while (continuar == "sim"){

    let nome = prompt("Qual é o seu nome?")
let idade = parseInt(prompt("Qual é a sua idade?"));

let peso = Number(prompt("Qual é o seu peso?"))
let altura = Number(prompt("Qual é a sua altura?"))
let profissão = prompt("Qual é a sua profissão?")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissão}, tem ${altura}m de altura e pesa ${peso}kg.`)

    if(idade >= 18){
        console.log("Está liberado para tomar umas geladas!")
        }else{
            console.log("Sem gelada para você!")
        }
    console.log(`Você tem ${idade * 12} meses ou ${idade * 52} semanas ou ${idade * 365} dias de idade, Nasceu em ${2023 - idade}`)
    
    
    //segunda parte
    let imc = 0
     imc = parseFloat(peso / (altura * altura))
        if(imc < 18.5){
        console.log("Seu imc é " + imc + "kg/m², você está no nível: Magreza");
    
        } else if(imc = 18.5 && imc <= 24.9) {
            console.log("Seu imc é " + (imc) + " kg/m², você está no nível: Normal");
    
        } else if(imc = 24.9 && imc <= 30) {
            console.log("Seu imc é " + imc + "kg/m², você está no nível: Sobrepeso");
        } else {
            console.log("Seu imc é " + imc + "kg/m², você está no nível: Obesidade");
        }
    
    //terceira parte
    
    let ano = Number(2023)
    let nasc = 2023 - idade
    
    for(idade > 0; nasc < ano; idade--, ano--){ 
        console.log(`em ${ano} Você tinha ${idade} anos`)
    }    console.log(`Em ${nasc} você nasceu`)
 }


