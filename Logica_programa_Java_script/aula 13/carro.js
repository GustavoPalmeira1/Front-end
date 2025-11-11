class Carro {
    portas
    rodas
    portaMala
    combustivel
    motor
}

function carros(){
    var fusca = new Carro
    fusca.combustivel = "gasolina"
    fusca.motor = "sim"
    fusca.portaMala = "nao"
    fusca.portas = "2"
    fusca.rodas = "4"

    var bmw = new Carro
    bmw.combustivel = "gas"
    bmw.motor = "sim/nao"
    bmw.portaMala = "medio"
    bmw.portas = "4"
    bmw.rodas = "4"

    var mercedes = new Carro
    mercedes.combustivel = "todos"
    mercedes.motor = "sim"
    mercedes.portaMala = "grande"
    mercedes.portas = "6"
    mercedes.rodas = "8"

    console.log("fusca",fusca);
    console.log("bmw",bmw);
    console.log("mercedes",mercedes);
    
}

carros()