let quantosNumerosSalva, resposta, listaDeNumeros ;
listaDeNumeros = [];

quantosNumerosSalva = prompt("Quantos números quer salvar?");

do {   

    // Adiciona numeros a lista
    for (let i = 1; i <= quantosNumerosSalva; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));
        listaDeNumeros.push(numero);
    }    

    resposta = prompt("Quer adicionar mais números?(s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer salvar quantos números a mais?"));
    }

} while (resposta === "s");

document.write("O tamanho da lista passada foi: " + listaDeNumeros.length + ".");