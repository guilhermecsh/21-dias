let num1 = Number(prompt("Insira o primeiro número"))
let operação = prompt("Qual operação você deseja fazer?")
let num2 = Number(prompt("Insira o segundo número"))

    switch(num1 && num2 && operação){
        case "+":
            console.log( "O resultado da operação é igual a: ")
            console.log(num1 + num2)
            break;

        case "-":
            console.log( "O resultado da operação é igual a: ")
            console.log(num1 - num2)
            break;

         case "*":
            console.log( "O resultado da operação é igual a: ")
            console.log(num1 * num2)
            break; 

        case "/":
            console.log( "O resultado da operação é igual a: ")
            console.log(num1 / num2)
            break;   

     
              
     
}
