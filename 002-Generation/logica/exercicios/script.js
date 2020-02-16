// =========================== ex6 lista
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

resposta = "n";

resposta = prompt("Quer trocar alguma letra das palavras? (s/n)");

if(resposta === "s"){    
    for (let i = 0; i < listaDePalavras.length; i++) {
        // terminar codigo a partir daqui, pesquisar replace
    }
    document.write("O número " + numero + " aparece: " + contador);
}

// =========================== ex1, ex2, ex4, ex5 lista
// let contador, lista, listaOrdenada, resposta, maior, aux;

// contador = parseInt(prompt("Quer verificar quantos números?"));
// lista = [];
// listaOrdenada = [];
// maior = 0;

// do {

//     for(let i = 0; i < contador; i++) {
//         let numero = parseInt(prompt("Insira o  número " + (i + 1) + ": "));
//         lista.push (numero);       
//     }    
    
//     resposta = prompt("Quer adicionar mais números?(s/n)");

//     if(resposta === "s"){
//         contador = parseInt(prompt("Quer verificar quantos números a mais?"));
//     }

// } while (resposta === "s"); 

// listaOrdenada = lista.slice(0, lista.length);
// listaOrdenada.sort();

// document.write("O maior número passado foi: " + (Math.max.apply(null,lista)));
// document.write("<br>");
// document.write("Foi passado " + lista.length + " números");
// document.write("<br>");
// document.write("Histórico de números: (" + lista + ")");
// document.write("<br>");
// document.write("Histórico de números ordenados: (" + listaOrdenada + ")");
// document.write("<br>");

// let numero;
// resposta = "n";

// resposta = prompt("Quer verificar quantas vezes foi digitado algum número?");

// if(resposta === "s"){    
//     numero = parseInt(prompt("Digite o número:")); 
//     contador = 0
//     for(let i = 0; i < listaOrdenada.length; i++){
//         if(listaOrdenada[i] === numero){
//             contador++;
//         }
//     }
//     document.write("O número " + numero + " aparece: " + contador);
// }


// =========================== oitavo programa
// let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];

// let mes = parseInt(prompt("Informe o mês em número: "));
// document.write("O mês correspondente é: " + meses[mes - 1]);

// let myObject = [{
//     nome: "Hugo"
//     idade: 28
// },
// {
//     nome: "Pedro"
//     idade: 25
// }]
// document.write(myObject[0].nome);
// document.write(myObject[0].idade);

// document.write(myObject[1].nome);
// document.write(myObject[1].idade);


// =========================== setimo programa
// for (let coluna = 0; coluna <= 10; coluna++) {
//     for (let linha = 0; linha <= 10; linha++) {    
//         // if (linha >= coluna){
//             document.write("*");
//         // }
//     }
//     document.write("<br>")
// }

// =========================== sexto programa
// let contador = 10;
//
// while (contador >= 1) {
//     document.write(contador);
//     document.write(" ");
//     contador--;
// }
// // document.write("<br>")
// // document.write(contador);
// // document.write("<br>")
// // contador++;
// do {
//     document.write(contador);
//     document.write(" ");
//     contador++;
// } while (contador <= 10);


// =========================== quinto programa
// let mes = "Janeiro";
// switch (mes) {
//     case "Janeiro" : console.log("Você escolheu Janeiro!");        
//         break;
//     case "Fevereiro" : console.log("Você escolheu Fevereiro!");        
//         break;
//     case "Março" : console.log("Você escolheu Março!");        
//         break;
//     case "Abril" : console.log("Você escolheu Abril!");        
//         break;
//     case "Maio" : console.log("Você escolheu Maio!");        
//         break;
//     case "Junho" : console.log("Você escolheu Junho!");        
//         break;
//     case "Julho" : console.log("Você escolheu Julho!");        
//         break;
//     case "Agosto" : console.log("Você escolheu Agosto!");        
//         break;
//     case "Setembro" : console.log("Você escolheu Setembro!");        
//         break;
//     case "Outubro" : console.log("Você escolheu Outubro!");        
//         break;
//     case "Novembro" : console.log("Você escolheu Novembro!");        
//         break;
//     case "Dezembro" : console.log("Você escolheu Dezembro!");        
//         break;    
//     default : console.log("Mês inválido!");       
// }



// =========================== quarto programa
// let n1, n2, n3, n4, media;
//
// n1 = 3;
// n2 = 5;
// n3 = 10;
// n4 = 8;
// media = (n1 + n2 + n3 + n4) / 4;
//
// document.write("A média é: " + media);
// if (media >= 7) {    
//     document.write("<br>Status: Aprovado");
// } else if(media >= 5 && media < 7) {    
//     document.write("<br>Status: Recuperação");
// } else {
//     document.write("<br>Status: Reprovado");
// }

// =========================== terceiro programa
// let a = 2;
// let b = '2';
// document.write(a == b);
// document.write("<br>");
// document.write(a === b);
// document.write("<br>");
// document.write(a != b);
// document.write("<br>");
// document.write(a !== b);


// =========================== segundo programa ex3
// let numeroUm, numeroDois, soma, subtracao, multiplicacao, divisao;
//
// numeroUm = parseInt(prompt("Digite o primeiro numero: "));
// numeroDois = parseInt(prompt("Digite o segundo numero: "));
//
// soma = numeroUm + numeroDois;
// subtracao = numeroUm - numeroDois;
// multiplicacao = numeroUm * numeroDois;
// divisao = numeroUm / numeroDois;
//
// document.write("A soma de " + numeroUm + " e " + numeroDois + " é: " + soma + "<br>");
// document.write("A subtração de " + numeroUm + " e " + numeroDois + " é: " + subtracao + "<br>");
// document.write("A multiplicação de " + numeroUm + " e " + numeroDois + " é: " + multiplicacao + "<br>");
// document.write("A divisão de " + numeroUm + " e " + numeroDois + " é: " + divisao + "<br>");


// =========================== primeiro programa
//console.log("Hello World");
//document.write("Hello World");
//alert("Hello World");