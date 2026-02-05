var maiorIdade;
function idades(...resto){
    maiorIdade = Math.max(...resto)

    return(maiorIdade);
}
idades(15,12,31,12,32,12,51,21,10,9)

console.log(maiorIdade);
