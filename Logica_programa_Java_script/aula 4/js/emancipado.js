function criatividade() {
    const genero2 = "feminino";
    const genero1 = "masculino";
    const idadeGen1 = 18;
    const idadeGen2 = 21;

    var idadeUsuario = prompt("digite a sua idade");
    var generoUsuario = prompt("Seu genero é masculino ou feminino?")

    var emancipadoHomen = idadeUsuario = idadeGen1 && generoUsuario == genero1
    var emancipadoMulher = idadeUsuario = idadeGen2 && generoUsuario == genero2

    console.log( "para homens: " + emancipadoHomen);
    console.log("para mulheres: " + emancipadoMulher);
  
}

criatividade();

