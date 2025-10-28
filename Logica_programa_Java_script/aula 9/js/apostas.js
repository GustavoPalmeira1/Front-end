function aposta() {
    var aposta = 0;
    var contador = 0;
    var entrada = 0;

    while(contador <= 4){
        entrada = Number(prompt("qual a aposta?"))
        aposta = aposta + entrada;
        contador = contador + 1
    }
    console.log(aposta);
}

aposta()