let tabuada = Number(prompt("Qual número você deseja ver a tabuada?"));

for(let contador = tabuada; contador <= tabuada + 2; contador++ ){
    console.log("tabuada do número: " + contador);
    for(let contador2 = 0; contador2 <= 10; contador2++){
        console.log(contador + " x " + contador2 + " = " + (contador * contador2))
    }
    
    
    } 