let listaDePalavras,listaInvertida, contador, resposta;

contador = parseInt(prompt("Quer inverter quantas palavras?"));
listaDePalavras = [];
listaInvertida = [];

do {
    for(let i = 0; i < contador; i++) {
        let palavra = prompt("Insira a palavra " + (i + 1) + ": ");
        listaDePalavras.push (palavra);       
    } 

    resposta = prompt("Quer adicionar mais algumas palavras? (s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer adicionar quantas palavras a mais?"));
    }
} while (resposta === "s");

listaInvertida = listaDePalavras.slice(0, listaDePalavras.length);
for (let i = 0; i < listaInvertida.length; i++) {
    listaInvertida[i] = listaDePalavras[i].split("").reverse().join("");    
}

document.write("Histórico de palavras: (" + listaDePalavras + ")");
document.write("<br>");
document.write("Histórico de palavras invertidas: (" + listaInvertida + ")");