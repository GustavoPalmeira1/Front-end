function boaTarde(){
    const hora1 = 12
    const hora2 = 18
    var horaAtual = prompt("digite o horario atual")

    var podeBoaTarde = horaAtual >= hora1 && horaAtual <= hora2

    console.log("boa tarde é entre " + hora1 + " e " + hora2 );
    
    console.log("o horario atual é "  + horaAtual);
    

    console.log(podeBoaTarde);
        
    alert(podeBoaTarde)
}


boaTarde()