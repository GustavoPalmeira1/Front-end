function precoGasolina() {
    var gasolina = parseFloat(prompt("qual o preço?"))
    var limitacao = gasolina.toFixed(2)

    console.log(limitacao);
    
}

precoGasolina()