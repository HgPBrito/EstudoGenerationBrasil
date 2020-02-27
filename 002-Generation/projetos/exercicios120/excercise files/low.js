function preencheu(tipo) {
    let preencheu = false;
    if (tipo.length >= 1) {
        preencheu = true;
    }
    return preencheu;
}

function temArroba(nome, tipo) {
    let tem = false;
    if (tipo.includes('@')) {
        document.getElementById("alert-" + nome).style.visibility = "hidden";
    } else {
        document.getElementById("alert-" + nome).innerHTML = "Invalid input field, " + nome + " Invalid!";
        document.getElementById("alert-" + nome).style.visibility = "visible";
    }
}

function terminaEm(nome, tipo) {
    let terminacoes = [".com", ".co", ".org", ".net", ".br"];
    let tem = false;
    for (let i = 0; i < terminacoes.length; i++) {
        if (tipo.endsWith(terminacoes[i])) {
            tem = true;
        }
    }

    return tem;
}
function validateForm() {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (!preencheu(email)) {
        document.getElementById("alert-" + nome).innerHTML = "Invalid input field, " + nome + " should have at least 1 character!";
        document.getElementById("alert-" + nome).style.visibility = "visible";
    }

    if (!preencheu(senha)) {
        document.getElementById("alert-" + nome).innerHTML = "Invalid input field, " + nome + " should have at least 1 character!";
        document.getElementById("alert-" + nome).style.visibility = "visible";
    }

}