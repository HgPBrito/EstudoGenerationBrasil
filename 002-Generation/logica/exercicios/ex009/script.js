let quantosNumerosCompara, media, resposta, soma, contador, listaDeNumeros ;
listaDeNumeros = [];
contador = 0;
soma = 0;
quantosNumerosCompara = prompt("Quantos números quer digitar para mostrar a média?");

do {   

    // Adiciona numeros a lista
    for (let i = 1; i <= quantosNumerosCompara; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));
        listaDeNumeros.push(numero);
        contador++;
    }    

    resposta = prompt("Quer adicionar mais números?(s/n)");

    if(resposta === "s"){
        quantosNumerosCompara = parseInt(prompt("Quer adicionar quantos números a mais?"));
    }

} while (resposta === "s");

for (let i = 0; i < listaDeNumeros.length; i++) {
    soma += listaDeNumeros[i];    
}
media = soma / contador;
document.write("A média dos números digitado é: " + media)