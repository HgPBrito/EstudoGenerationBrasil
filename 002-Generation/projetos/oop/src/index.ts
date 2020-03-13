class Disciplina {
    //Atributos
    static media: number = 7;
    nome: string;

    //Construtorda Class Disciplina
    constructor(nome: string) {
        this.nome = nome;
    }

    //Metodos da Class Disciplina
    calculaAprovacao(nomeAluno: string, notaAluno: number) {
        if (notaAluno >= Disciplina.media) {
            return `${nomeAluno} aprovado(a) em ${this.nome}, não fez mais do que a obrigação!`;
        } else {
            return `${nomeAluno} reprovado(a) em ${this.nome}!`;
        }
    }

}

//Instanciação de um Objeto da Class Disciplina
let matéria: Disciplina = new Disciplina("Matemática");

console.log(matéria.calculaAprovacao("kakau", 8));
console.log(matéria.calculaAprovacao("k0k0u", 3));