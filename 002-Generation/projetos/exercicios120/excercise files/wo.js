function preencheu(nome, tipo) {
    if (tipo.length < 1) {
        document.getElementById("alert-" + nome).innerHTML = "Invalid input field, " + nome + " should have at least 1 character!";
        document.getElementById("alert-" + nome).style.visibility = "visible";
    } else {
        document.getElementById("alert-" + nome).style.visibility = "hidden";
    }
}

function temArroba(nome, tipo) {
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

    if (tem) {
        document.getElementById("alert-" + nome).style.visibility = "hidden";
    } else {
        document.getElementById("alert-" + nome).innerHTML = "Invalid input field, termination of invalid " + nome + "!";
        document.getElementById("alert-" + nome).style.visibility = "visible";
    }
}
function validateForm() {

    let email;
    let senha;

    document.querySelector('.btn').addEventListener('click', () => {
        email = document.getElementById('email').value;
        senha = document.getElementById('password').value;

        preencheu("email", email);
        temArroba("email", email);
        terminaEm("email", email);

        preencheu("password", senha);



    });


}