function chamada() {
    const numeroMaximo = 20
    var chamada = prompt("quantas pessoas tem na chamada?")

    if (chamada === "20"){
        alert("o numero maximo foi atingido")
    }  else if (chamada < "20"){
        alert("ainda ha vagas disponiveis")
    }else{
        alert("numero de vagas excede o numero de lugares")
    }
}

chamada()