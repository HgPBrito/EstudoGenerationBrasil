
let btn = document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    let primeiroNome = document.getElementById('fname').value;
    let ultimoNome = document.getElementById('lname').value;
    let text = (primeiroNome + " " + ultimoNome + "!");


    let form = document.getElementById('form1');
    let pElement = document.createElement('p');
    let textElement = document.createTextNode(text);
    pElement.appendChild(textElement);
    form.appendChild(pElement);


});
