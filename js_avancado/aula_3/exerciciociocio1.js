var carro1 = {
    ano: 2000,
    marca: "fusca",
    valorDeCompra: 1500,
    cor: "azul",
    valorAtual: 1000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1,
    montadora: "rodrigo"
}
var carro2 = {
    ano: 1900,
    marca: "fiat",
    valorDeCompra: 2500,
    cor: "azul",
    valorAtual: 2000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1,
    montadora: "pedro"
}
var carro3 = {
    ano: 2015,
    marca: "corola",
    valorDeCompra: 15000,
    cor: "azul",
    valorAtual: 10000,
    lucroDaLoja: 0,
    ipva: 0,
    licenciamento: 1,
    montadora: "paulo"
}

var lista = []

lista.push(carro1)
lista.push(carro2)
lista.push(carro3)

const montadoras = lista.forEach(s => {
   return montadoras = lista.montadora
    
});
    
console.log(montadoras);