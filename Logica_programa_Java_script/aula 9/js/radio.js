function camisa(){
    var resposta;
// com while
    while (resposta != "tech4fm é show" ) {
        resposta = prompt("atenda");
    }
    alert("ganhou camisa nice")

// com o do while
    do {
        resposta = prompt("atenda");
    }while (resposta != "tech4fm é show" )
    alert("ganhou camisa nice")
}
camisa()