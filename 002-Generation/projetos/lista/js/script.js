function addItem(text) {
    let liElement = document.createElement('li');
    let textElement = document.createTextNode(text);
    liElement.appendChild(textElement);
}

let nomes = ['Chuchu', 'Abacaxi', 'Cacau'];
let listElement = document.querySelector('ul');
let inputElement = document.querySelector('input');

document.getElementById('btn').addEventListener('click', () => {
    addItem(inputElement.value);
    inputElement.value = '';
});