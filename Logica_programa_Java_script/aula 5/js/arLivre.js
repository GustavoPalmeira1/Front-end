function atividade() {
    var temperatura = prompt("Qual a temperatura");
    var clima = prompt("esta chovendo?")

    if (temperatura < 32 && temperatura > 15 && clima === "nao"){
        alert("o clima esta ideal")
    } else if (temperatura >= 32 && clima === "nao") {
        alert("esta muito quente para sair");
    }else if (temperatura < 32 && temperatura <=15 && clima === "nao"){
        alert("O clima esta muito frio para sair")
    }
    else{
        alert("o clima esta ruim")
    }
   
}

atividade()