
let saldo = 1000
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransações = 0;
let continuar = false


 do{
    const nome = prompt("Qual é o seu nome?")
    const cpf = Number(prompt("Qual é o seu cpf?"))
    const valor = Number(prompt("Qual valor você desejar inserir?"))
    const operação = prompt("Você deseja fazer saque ou depósito?")
  
    if(valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operação == "saque" && valor > saldo) {
        console.log("Saldo insuficiente. A transição não foi realizada");
    } else if (operação == "saque") {
        console.log("Olá," + nome + (cpf) + ", seu saldo atual é: " + saldo);
        saldo -= valor;
        totalTransações++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log (`transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);

    }else{
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransações++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log (`transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):");
    if (opcao === "1") {
        continuar = true
    }else if (opcao === "2"){
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false

    }

 } while (continuar)
    console.log(`Saldo final: R$${saldo}`);
    console.log(`Maior valor inserido: R$${maiorValorInserido}`);
    console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransações)}`);
