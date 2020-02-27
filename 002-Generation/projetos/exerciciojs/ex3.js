document.getElementById('btn').addEventListener('click', () => {

    let cm = parseFloat(document.querySelector('#cm').value);
    let polegadas = cm * 0.393701;
    document.write(cm + "cm, em polegadas: " + polegadas);

});