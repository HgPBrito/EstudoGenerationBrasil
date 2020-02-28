document.getElementById('btn').addEventListener('click', () => {

    let numero = document.getElementById('number').value;

    let numeroInvertido = numero.split("").reverse().join("");
    document.write(numeroInvertido);
});