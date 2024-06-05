class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao
    resultado
    metros
    

    constructor(nome, potencia , velocidadeMaxima , aceleracao, metros, resultado){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
        this.metros = metros
        this.resultado = resultado

    }

}
let carro = new Carro (`Ferrari` , `400` , `300` , `8.2` , `500` , 500 / (300 / 8.2))
console.log(carro)

class Corrida {
    nome //nome do local da corrida
    tipo //uma corrida pode ser fórmula 1, rally
    distância // o total em metros da corrida
    participantes // um array de objetos da classe Carro 
    vencedor //Qual equipe ganhou a corrida

    constructor (nome, tipo, distância, participantes, vencedor){
        this.nome = nome
        this.tipo = tipo
        this.distância = distância
        this.participantes = participantes
        this.vencedor = vencedor

    }

}
let par = new Corrida ( `Interlagos`, `stockCar`, `200m` , [`celta, corolla, ferrai`] , `ferrari`)