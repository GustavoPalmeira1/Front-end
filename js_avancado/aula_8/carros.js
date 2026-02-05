new class Carro {
    constructor(anoDeFabricao,marca,mesDeFabricacao,dataVerdadeira){
        this.ano = anoDeFabricao;
        this.marca = marca;
        this.mes= mesDeFabricacao;
        this.data= dataVerdadeira;
    }
}

function carro1Data(){
let dataReal = carro1.mesDeFabricacao < 7 ? carro1.anoDeFabricao++: carro1.anoDeFabricao;
}("")

function carro2Data(){
let dataReal2 = carro2.mesDeFabricacao < 7 ? carro2.anoDeFabricao++: carro2.anoDeFabricao;
}("")

function carro3Data(){
let dataReal3 = carro3.mesDeFabricacao < 7 ? carro3.anoDeFabricao++: carro3.anoDeFabricao;
}("")

let carro1 = new Carro(2000,"fiat",1,dataReal);
let carro2 = new Carro(1980,"uno",2,dataReal2);
let carro3 = new Carro(1990,"fusca",8,dataReal3);

