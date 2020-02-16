let quantosNumerosCompara, resposta, listaDeNumeros ;
listaDeNumeros = [];

quantosNumerosCompara = prompt("Quantos números quer comparar?");

do {   

    // Adiciona numeros a lista
    for (let i = 1; i <= quantosNumerosCompara; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));
        listaDeNumeros.push(numero);
    }    

    resposta = prompt("Quer adicionar mais números?(s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer verificar quantos números a mais?"));
    }

} while (resposta === "s");

document.write("O maior número passado foi: " + (Math.max.apply(null,listaDeNumeros)));