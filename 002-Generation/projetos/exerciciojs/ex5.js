document.getElementById('btnF').addEventListener('click', () => {
    let F = parseFloat(document.querySelector('#F').value);
    let C = (5 * (F - 32) / 9);
    document.write('O valor em graus Celsius é: ' + C + '°C')
});