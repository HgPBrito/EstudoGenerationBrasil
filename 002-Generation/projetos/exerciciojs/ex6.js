document.getElementById('btnC').addEventListener('click', () => {
    let C = parseFloat(document.querySelector('#C').value);
    let F = ((C * 9 / 5) + 32);
    document.write('O valor em graus Celsius é: ' + C + '°C')
});