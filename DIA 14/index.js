var nome
var salario 

function perguntarColaborador(){
    nome = prompt("Qual é o seu nome")
    salario = Number(prompt("Qual é o seu salário?"))
    calcularAumento(nome, salario);
}

function calcularAumento(nome, salario){
    var aumento = 0;

    if(salario <= 1500){
        aumento = 0.2;
    } else if (salario <= 2000){
        aumento = 0.15;
    } else if (salario <= 3000){
        aumento = 0.1;
    } else {
        aumento = 0.05;
    }

    var novoSalario = salario + (salario * aumento);

    console.log("Nome do colaborador: " + nome)
    console.log("Salário R$: " + salario)
    console.log("Aumento do salário: " + (aumento * 100) + "%")
    console.log("O novo salário é: R$" + novoSalario)

    perguntarnovamente();
 }

 function perguntarnovamente(){
    var pergunta = prompt("Deseja calcular novamente? (sim/não)")

    if(pergunta == "sim"){
        perguntarColaborador();
    } else {
        console.log("Programa encerrado.");
    }
 }