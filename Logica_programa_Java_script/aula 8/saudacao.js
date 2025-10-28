function saudacao(horario){
    if(horario === "dia"){
        console.log("bom dia");
    }else if (horario === "tarde"){
        console.log("boa tarde");
    }else if(horario === "boa noite"){
        console.log("boa noite");
    }else {
        console.log("bom horario");
        
    }
    
}

function saudacao2(horario){
    switch (horario){
        case "dia":
            console.log("bom dia");
            break;
        case "tarde":
            console.log("boa tarde");
            break;
        case "noite":
            console.log("boa noite");
            break;
        default:
            console.log("ta fora do horario doidao");
            break;
    }
}

saudacao(horario = "noite")
saudacao2(horario = "noite")
