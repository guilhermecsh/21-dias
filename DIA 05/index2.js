let pergunta = prompt("O que você deseja fazer no posto do guiguito?  Abastecer com gasolina (digite 1)  Abastecer com álcool (digite 2) Calibrar os pneus (digite 3)?")


switch(pergunta){
    case "1":
        let pergunta2 = prompt("Quantos reais você deseja abastecer de Gasolina")
        console.log( "você abasteceu" ,  pergunta2 / 5 , "litros de gasolina");
        break;
        
    case "2":
        let pergunta3 = prompt("Quantos reais você deseja abastecer de Álcool?")
        console.log( "você abasteceu" ,  pergunta3 / 3 , "litros de álcool");
        break;

    case "3":
        console.log("Pneus calibrados com sucesso!")
        break;

    default:
        console.log("Obrigado, volte sempre!")
        break;

}
        
        
    























