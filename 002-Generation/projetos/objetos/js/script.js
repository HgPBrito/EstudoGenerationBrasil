var teste = new String("teste");
var teste1 = "teste";

function MyCar(cor, velocidadeMaxima) {
    this.Cor = cor;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.VelocidadeAtual = 0;
}

MyCar.prototype.Acelerar = function () {
    if (this.VelocidadeAtual < this.VelocidadeMaxima) {
        this.VelocidadeAtual++;
    }
}

MyCar.prototype.Frear = function () {
    if (this.VelocidadeAtual > 0) {
        this.VelocidadeAtual--;
    }
}

let meuCarro = new MyCar('Preto', 10);
let meuFusca = new MyCar('Vermelha', 5);

console.log(meuCarro.Cor);
console.log(meuCarro.velocidadeMaxima);

var minhaFerrari = {
    Cor: "Amarela",
    VelocidadeMaxima: 20,
    VelocidadeAtual: 0,
    Acelerar: function () {
        if (this.VelocidadeAtual < this.VelocidadeMaxima) {
            this.VelocidadeAtual++;
        }
    },
    Frear: function () {
        if (this.VelocidadeAtual > 0) {
            this.VelocidadeAtual--;
        }
    }
};

document.getElementById('acelerar').addEventListener('click', () => {
    meuCarro.Acelerar();
    console.log("meuCarro: " + meuCarro.VelocidadeAtual);

    meuFusca.Acelerar();
    console.log("meuFusca: " + meuFusca.VelocidadeAtual);

    minhaFerrari.Acelerar();
    console.log("minhaFerrari: " + minhaFerrari.VelocidadeAtual);
});

document.getElementById('frear').addEventListener('click', () => {
    meuCarro.Frear();
    console.log("meuCarro: " + meuCarro.VelocidadeAtual);

    meuFusca.Frear();
    console.log("meuFusca: " + meuFusca.VelocidadeAtual);

    minhaFerrari.Frear();
    console.log("minhaFerrari: " + minhaFerrari.VelocidadeAtual);
});