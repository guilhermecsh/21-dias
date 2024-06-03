let nomes = []
let senhas = []
let pergunta = prompt("O que você deseja fazer? cadastrar, fazer login, excluir um cadastro ou encerrar o programa?.")
let contador = 0

switch(pergunta){
    case "encerrar":
        console.log("O programa foi encerrado")
        break;

    case "cadastrar":
        let nome = prompt("Qual é o seu nome?")
        let senha = prompt("Crie uma senha")
        nomes[contador] = nome
        senhas[contador] = senha
        contador++
        //console.log(nomes + " e " + senhas)
        break;

    case "login":
        nomes = ["guilherme", "pedro"]
        senhas = [1234 , 4321]
         let nomeLogin = prompt("Insira o seu nome?")
         let senhaLogin = prompt("Insira sua senha")
         nomes[contador] = nomeLogin
         senhas[contador] = senhaLogin
         contador++
         
         if(nomes[contador] == nomeLogin && senhas[contador] == senhaLogin){
            console.log("login realizado com sucesso!")

         } else if (nomeLogin || senhaLogin == "encerrar"){
            console.log("O programa foi encerrado")
        
         }  else {
            console.log("Credenciais erradas.");
         } break;
    
    case "excluir": 
        nomes = ["pedro", "guilherme", "mariana" , "cristina"]
        let excluirNome = prompt("Insira o nome que deseja excluir")

        let index = nomes.indexOf(excluirNome)

        if (index !== -1){
            nomes.splice(index, 1)
            console.log(`O nome de ${excluirNome} foi excluído.`)

        } else if (excluirNome = "encerrar"){
            console.log("O programa foi encerrado")
            

        

        } else {
            console.log(`O nome ${excluirNome} não foi encontrado no array`)
        }
        console.log("Esse é o array de nomes: " + nomes);
        break;

        default:
            console.log("Opção inválida, escolha outra!")

        
     

}
