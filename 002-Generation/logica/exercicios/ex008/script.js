let quantosNumerosCompara, resposta, listaDeNumeros ;
listaDeNumeros = [];

quantosNumerosCompara = prompt("Quantos números quer salvar?");

do {   

    // Adiciona numeros a lista
    for (let i = 1; i <= quantosNumerosCompara; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));
        listaDeNumeros.push(numero);
    }    

    resposta = prompt("Quer adicionar mais números?(s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer adicionar quantos números a mais?"));
    }

} while (resposta === "s");

for (let i = 0; i < listaDeNumeros.length; i++) {
    if(listaDeNumeros[i] % 2 == 0){
        document.write(listaDeNumeros[i] + " ");
    }   
}