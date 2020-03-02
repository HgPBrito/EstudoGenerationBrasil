'use strict';
//verificação se existe a key estado no local storage e altera o valor
if (localStorage.estado) {
    document.getElementById('estado').value = localStorage.estado;
}

//verificação se existe a key dataInicio no local storage e altera o valor
if (localStorage.estado) {
    document.getElementById('dataInicio').value = localStorage.dataInicio;
}

//verificação se existe a key dataFim no local storage e altera o valor
if (localStorage.estado) {
    document.getElementById('dataFim').value = localStorage.dataFim;
}

// função para salvar data
let salvaData = () => {
    //variaveis armazenando valor do input e select
    let estado = document.getElementById('estado').value;
    let dataInicio = document.getElementById('dataInicio').value;
    let dataFim = document.getElementById('dataFim').value;

    // Armazenando as informaçoes das variaveis no local storage
    localStorage.setItem('estado', estado);
    localStorage.setItem('dataInicio', dataInicio);
    localStorage.setItem('dataFim', dataFim);
}

// onchange = aciona a função  salvar data toda vex que ocorrer uma mudança no documento
document.onchange = salvaData;


document.querySelector('#remove').addEventListener('click', () => {
    localStorage.removeItem('estado');
    localStorage.removeItem('dataInicio');
    localStorage.removeItem('dataFim');
});