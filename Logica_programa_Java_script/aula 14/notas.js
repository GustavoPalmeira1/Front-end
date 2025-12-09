var contador = 0;
var maiorNota = 0;
function listaNota(){

    var lista = []

    var aluno1 = {
        nota: 2
    }
    var aluno2 = {
        nota: 9
    }
    var aluno3 = {
        nota: 6
    }
    var aluno4 = {
        nota: 10
    }
    var aluno5 = {
        nota:4
    }

    lista.push(aluno1);
    lista.push(aluno2);
    lista.push(aluno3);
    lista.push(aluno4);
    lista.push(aluno5);

    for (let i = 0; i < lista.length; i++) {
        
        if (lista[i].nota < 7){
            contador++
            
            
        }  
        if(lista[i].nota > maiorNota){
            maiorNota = lista[i];
            console.log(maiorNota);   
        }        
        
        
    }

    console.log(contador);
    // console.log(maiorNota);
}

listaNota()