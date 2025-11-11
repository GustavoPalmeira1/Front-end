function criatividade() {
    var gavetas = ["nike", "adidas", "sandalha", "chinelo"]

    var requesito = prompt("qual tenis voce procura?")
    
    for (var i = 0;  i < gavetas.length; i++){
        if (gavetas[i] === requesito){
            alert("o tenis esta na gaveta: " + (i + 1) )
            break
        }else{
            alert("nao temos o tenis")
            break
        }
    }
}

criatividade()