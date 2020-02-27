document.getElementById('btn').addEventListener('click', () => {

    let metros = parseInt(document.querySelector('#metros').value);
    let cm = metros * 100;
    document.write(metros + "m, em centimetros:" + cm);

});