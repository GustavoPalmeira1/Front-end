class Carro {
    constructor(motor,rodas,tanque){
        this.motor = motor;
        this.rodas = rodas;
        this.tanque = tanque;
    }
}


class CarroEletrico extends Carro{
    constructor(TamanhoDaBateria,motor,rodas,tanque){
        super(motor,rodas,tanque);
        this.TamanhoDaBateria = TamanhoDaBateria;
    }
}

const carroEletrico = new CarroEletrico("200 amperes","existe","rodas","20 litros")

console.log(carroEletrico);

const carros = new Carro ("existe","4","25 litros")

console.log(carros);

