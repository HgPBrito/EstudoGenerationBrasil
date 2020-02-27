document.getElementById('number').addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let valorDigitado = document.querySelector('input').value;
        document.write('O valor digitado foi' + valorDigitado);
    } else if (event.code == 'Space') {
        alert('TECLA INVÁLIDA!  apague o espaço e digite o número');
    }

});