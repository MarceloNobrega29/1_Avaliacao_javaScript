let aluno = {
    nome: "Marcelo", 
    notas: [6, 8.5, 10], 

    media: function() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
};

let mediaAluno = aluno.media();

console.log(`O aluno ${aluno.nome} tem uma média de ${mediaAluno.toFixed(2)}.`); 
