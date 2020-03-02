if (localStorage.getItem('text')) {
    document.getElementById('text').value = localStorage.getItem('text');
}

let salvaData = () => {
    localStorage.setItem('text', document.getElementById('text').value);
};

document.onchange = salvaData;