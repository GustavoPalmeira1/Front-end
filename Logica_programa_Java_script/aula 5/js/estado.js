function pergunta(){
    var seuEstado = prompt("digite a siga do seu estado")

    switch (seuEstado) {
        case "ES": 
        case "es": 
        case "Es":
            alert("Espírito Santo");
            break;
        case  "Rj": 
        case  "RJ":
        case  "rj":    
            alert("Rio de Janeiro");
            break
        case "SP" :
        case "sp" : 
        case "Sp" :
            alert("São Paulo");
            break
        case "MG":
        case "Mg":
        case "mg":
            alert("Minas gerais");  
            break      
        default: alert("estado nao registrado");
            console.log(seuEstado);
            
            break;
    }
}

pergunta()