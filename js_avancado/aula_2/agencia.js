var carro1 = {
    ano: 2000,
    marca: "fusca",
    valorDeCompra: 1500,
    cor: "azul",
    valorAtual: 1000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1
}
var carro2 = {
    ano: 1900,
    marca: "fiat",
    valorDeCompra: 2500,
    cor: "azul",
    valorAtual: 2000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1

}
var carro3 = {
    ano: 2015,
    marca: "corola",
    valorDeCompra: 15000,
    cor: "azul",
    valorAtual: 10000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1
}

var lista = []

lista.push(carro1)
lista.push(carro2)
lista.push(carro3)

const calculoDoLucro = () => {
    lista[0].lucroDaLoja = lista[0].valorDeCompra * 3 / 100
    lista[1].lucroDaLoja = lista[1].valorDeCompra * 3 / 100
    lista[2].lucroDaLoja = lista[2].valorDeCompra * 3 / 100
}

const calculoDoIpva = () => {
    lista[0].ipva = lista[0].valorAtual * 4 / 100
    lista[1].ipva = lista[1].valorAtual * 4 / 100
    lista[2].ipva = lista[2].valorAtual * 4 / 100
}

const calculoDoLicenciamento = () => {
    if (lista[0].ano <= new Date().getFullYear) {
        lista[0].licenciamento = 160
    } else {
        lista[0].licenciamento = 0
    }
    if (lista[1].ano <= new Date().getFullYear) {
        lista[1].licenciamento = 160
    } else {
        lista[1].licenciamento = 0
    }
    if (lista[2].ano <= new Date().getFullYear) {
        lista[2].licenciamento = 160
    } else {
        lista[2].licenciamento = 0
    }
}
calculoDoIpva();
calculoDoLicenciamento();
calculoDoLucro();

console.log(lista);
