let listaDePalavras, palavra, listaTrocada, troca, contador, resposta, letra;

contador = parseInt(prompt("Quer salvar quantas palavras?"));
listaDePalavras = [];
listaTrocada = [];

do {
    for(let i = 0; i < contador; i++) {
        palavra = prompt("Insira a palavra " + (i + 1) + ": ");
        listaDePalavras.push (palavra);       
    } 

    resposta = prompt("Quer adicionar mais algumas palavras? (s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer adicionar quantas palavras a mais?"));
    }
} while (resposta === "s");

resposta = "n";

resposta = prompt("Quer trocar alguma letra de todas palavras? (s/n)");

document.write("Histórico de palavras: (" + listaDePalavras + ")");

if(resposta === "s"){  
    listaTrocada = listaDePalavras.slice(0, listaDePalavras.length); 

    letra = prompt("qual letra quer trocar?" + listaTrocada);
    troca = prompt("por qual?");

    for (let i = 0; i < listaTrocada.length; i++) {
        let re = new RegExp(letra, "g");
        palavra = listaTrocada[i].replace(re, troca);
        listaTrocada[i] = palavra;
    }    

    document.write("<br>");
    document.write("Histórico de palavras com letras trocadas: (" + listaTrocada + ")");
}