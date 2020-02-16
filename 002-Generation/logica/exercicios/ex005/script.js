let quantosNumerosSalva, contador, numero, resposta, listaDeNumeros;
listaDeNumeros = [];

quantosNumerosSalva = prompt("Quantos números quer salvar?");

do {   

    // Adiciona numeros a lista
    for (let i = 1; i <= quantosNumerosSalva; i++) {
        numero = parseInt(prompt("Digite o número " + i + ":"));
        listaDeNumeros.push(numero);
    }    

    resposta = prompt("Quer adicionar mais números?(s/n)");

    if(resposta === "s"){
        contador = parseInt(prompt("Quer salvar quantos números a mais?"));
    }

} while (resposta === "s");

resposta = "n";

resposta = prompt("Quer verificar quantas vezes foi digitado algum número?");

if(resposta === "s"){    
    numero = parseInt(prompt("Digite o número:")); 
    contador = 0
    for(let i = 0; i < listaDeNumeros.length; i++){
        if(listaDeNumeros[i] === numero){
            contador++;
        }
    }
    document.write("O número " + numero + " aparece: " + contador);
}