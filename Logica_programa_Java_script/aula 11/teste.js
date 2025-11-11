var nome = []
var index = parseInt(prompt("quantos alunos"))

for (i= 0; i < index ; i++) {
     nome[i] = prompt("qual seu nome?");
    if(nome == ""){
        break
    }

     console.log(nome);
     
}