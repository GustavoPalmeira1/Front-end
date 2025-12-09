var nomes = []

const chamada = function () {
    nomes.push(prompt("fale o nome do aluno"))
    nomes.push(prompt("fale o segundo nome aluno"))
    nomes.push(prompt("fale o terceiro nome aluno"))
    nomes.sort()
    return nomes;
}


var turma = {
    alunos: chamada()
}


console.log(turma);



