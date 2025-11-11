var respota;

function pergunta() {
    for(i = 0; i <= 3; i++ ){
        alert("qual sua idade real?")
        for(j = 0; j <= 1; j++){
             respota = prompt("Responda sua idade");
            if (respota === "17") {
                alert("Nice ganhou a caneca");
                j = 4;
                i = 4;
            }else if( j < 1){
                alert("tem mais uma tentativa");
            }
        }
        if(respota !== "17"){
            alert("vamos para a proxima pessoa");
        }else(alert("Temos um vencedor"));
    }
}

pergunta();