let clickou = false;
document.querySelector('#apagada').addEventListener('mouseover', () => {
    if (!clickou) {
        document.querySelector('#apagada').src = "./img/lampada-acesa.jpg";
    }
});


document.querySelector('#apagada').addEventListener('mouseout', () => {
    if (!clickou) {
        document.querySelector('#apagada').src = "./img/lampada-apagada.jpg";
    }
});

document.querySelector('#apagada').addEventListener('click', () => {

    document.querySelector('#apagada').src = "./img/lampada-quebrada.jpg";
    clickou = true;
});

document.querySelector('#btn').addEventListener('click', () => {
    clickou = false;
    document.querySelector('#apagada').src = "./img/lampada-apagada.jpg";
});