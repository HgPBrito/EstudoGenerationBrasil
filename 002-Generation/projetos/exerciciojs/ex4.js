document.getElementById('btnArea').addEventListener('click', () => {
    let raio = document.getElementById('raio').value;
    let pi = Math.PI;
    let area = pi * Math.pow(raio, 2);
    document.write("A área do circulo é: " + Math.round(area).toPrecision(2));
    document.write("<br>A área do circulo é: " + Math.round(area).toFixed(2));
    document.write("<br>A área do circulo é: " + Math.round(area.toPrecision(2)));
    document.write("<br>A área do circulo é: " + Math.round(area.toFixed(2)));
});