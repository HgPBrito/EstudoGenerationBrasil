function naoPreencheu(tipo) {
    let naoPreencheu = true;
    if (tipo.length >= 1) {
        naoPreencheu = false;
    }
    return naoPreencheu;
}

function naoTemArroba(tipo) {
    let naoTem = true;
    if (tipo.includes('@')) {
        naoTem = false;
    }
    return naoTem;
}

function naoTerminaEm(tipo) {
    let terminacoes = [".com", ".co", ".org", ".net", ".br"];
    let naoTem = true;
    for (let i = 0; i < terminacoes.length; i++) {
        if (tipo.endsWith(terminacoes[i])) {
            naoTem = false;
        }
    }
    return naoTem;
}


function validateForm() {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (naoPreencheu(email)) {

        document.getElementById("alert-email").innerHTML = "Invalid input field, email should have at least 1 character!";
        document.getElementById("alert-email").style.visibility = "visible";

    } else if (naoTemArroba(email)) {

        document.getElementById("alert-email").innerHTML = "Invalid input field, Email Invalid!";
        document.getElementById("alert-email").style.visibility = "visible";

    } else if (naoTerminaEm(email)) {

        document.getElementById("alert-email").innerHTML = "Invalid input field, termination of Invalid Email!";
        document.getElementById("alert-email").style.visibility = "visible";

    } else {

        document.getElementById("alert-email").style.visibility = "hidden";
    }

    if (naoPreencheu(senha)) {
        document.getElementById("alert-email").innerHTML = "Invalid input field, email should have at least 1 character!";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").style.visibility = "hidden";
    }




}