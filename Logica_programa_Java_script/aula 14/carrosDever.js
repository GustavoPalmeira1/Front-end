var numero = 0;

function carros(){
    var carroLista = []
    var carroObjeto = {
        modelo: "fusca",
        cor: "vermelho"
    }
    var carroObjeto2 = {
        modelo: "van",
        cor: "vermelho"
    }
    var carroObjeto3 = {
        modelo: "caminao pequeno",
        cor: "azul"
    }
    var carroObjeto4 = {
        modelo: "onix",
        cor: "preto"
    }

    carroLista.push(carroObjeto)
    carroLista.push(carroObjeto2)
    carroLista.push(carroObjeto3)
    carroLista.push(carroObjeto4)

    for (let i = 0; i < carroLista.length; i++) {
        
        if (carroLista[i].cor ==  "vermelho") {
            numero++
            console.log(numero);
        }
        
    }
    
    
}

carros()