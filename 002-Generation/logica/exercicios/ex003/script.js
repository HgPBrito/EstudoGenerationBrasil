let numeroUm, numeroDois, soma, subtracao, multiplicacao, divisao;

numeroUm = parseInt(prompt("Digite o primeiro numero: "));
numeroDois = parseInt(prompt("Digite o segundo numero: "));

soma = numeroUm + numeroDois;
subtracao = numeroUm - numeroDois;
multiplicacao = numeroUm * numeroDois;
divisao = numeroUm / numeroDois;

document.write("A soma de " + numeroUm + " e " + numeroDois + " é: " + soma + "<br>");
document.write("A subtração de " + numeroUm + " e " + numeroDois + " é: " + subtracao + "<br>");
document.write("A multiplicação de " + numeroUm + " e " + numeroDois + " é: " + multiplicacao + "<br>");
document.write("A divisão de " + numeroUm + " e " + numeroDois + " é: " + divisao + "<br>");