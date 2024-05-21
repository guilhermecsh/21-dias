
//declarando as variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0


//Solicitando informações e atribuindo valores
 nome = prompt("insira seu nome");
 idade = parseInt(prompt("Insira sua idade"))
 altura = parseFloat(prompt("insira sua altura aqui"))
 peso = parseInt(prompt("Insira seu peso aqui"))

//ano de nascimento e imc
let anoDeNascimento = 0
anoDeNascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)


//exibindo no console
console.log("Olá " + nome + "," + " você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura 
    + "m de altura, pesa " + peso + "kg e  seu imc é " + imc + "kg/m2.")
