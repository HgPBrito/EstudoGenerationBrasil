"use strict";
var Disciplina = /** @class */ (function () {
    //Construtorda Class Disciplina
    function Disciplina(nome) {
        this.nome = nome;
    }
    //Metodos da Class Disciplina
    Disciplina.prototype.calculaAprovacao = function (nomeAluno, notaAluno) {
        if (notaAluno >= Disciplina.media) {
            return nomeAluno + " aprovado(a) em " + this.nome + ", n\u00E3o fez mais do que a obriga\u00E7\u00E3o!";
        }
        else {
            return nomeAluno + " reprovado(a) em " + this.nome + "!";
        }
    };
    //Atributos
    Disciplina.media = 7;
    return Disciplina;
}());
//Instanciação de um Objeto da Class Disciplina
var matéria = new Disciplina("Matemática");
console.log(matéria.calculaAprovacao("kakau", 8));
console.log(matéria.calculaAprovacao("k0k0u", 3));
