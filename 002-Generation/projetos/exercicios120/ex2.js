document.getElementById('btn').addEventListener('click', () => {

    let frase = document.getElementById('text').value;
    let fraseModificada = frase.toLowerCase();
    //fraseModificada = fraseModificada.replace(/ /g, '');
    fraseModificada = fraseModificada.split(' ').join('');
    console.log(fraseModificada);

    let fraseInvertida = fraseModificada.split("").reverse().join("");

    console.log(fraseInvertida);

    if (fraseModificada === fraseInvertida) {
        document.write("\'" + frase + "\', É um palíndromo!!");
    } else {
        document.write("\'" + frase + "\', NÃO é um palíndromo!!");
    }
});