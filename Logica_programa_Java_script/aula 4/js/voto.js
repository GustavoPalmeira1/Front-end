function voto() {
    const idadeMinima = 18;
    const idadeMaxima = 70;
    var suaIdade = prompt("Digite sua idade")

    var temQueVotar = suaIdade >= idadeMinima && suaIdade <= idadeMaxima

    console.log(suaIdade);
    

    console.log(temQueVotar);
    

    alert(temQueVotar)
}

voto()