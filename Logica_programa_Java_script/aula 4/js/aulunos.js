function alunos(){
    const totalAlunos = 24;
    const alunosPresentes = prompt("Quantos alunos estao presentes? ");

    var respostaAlunos = alunosPresentes >= 13
    
    console.log ("O total de alunos é: " + totalAlunos);
    console.log( "O Numero de alunos presentes é: " +  alunosPresentes);
    
    
    console.log( "A maioria dos alunos esta presente? " + respostaAlunos);
    
}

alunos()