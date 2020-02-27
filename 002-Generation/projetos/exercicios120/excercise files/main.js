function validateForm() {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email.length < 1) {
        document.getElementById("alert-email").innerHTML = "Invalid input field. Email should have at least 1 character!";
        document.getElementById("alert-email").style.visibility = "visible";
    } else if (email.includes('@')) {
        let terminacoes = [".com", ".co", ".org", ".net", ".br"];
        let tem = false;
        for (let i = 0; i < terminacoes.length; i++) {
            if (email.endsWith(terminacoes[i])) {
                tem = true;
            }
        }

        if (tem) {
            document.getElementById("alert-email").style.visibility = "hidden";
        } else {
            document.getElementById("alert-email").innerHTML = "Invalid input field. Termination of invalid Email!";
            document.getElementById("alert-email").style.visibility = "visible";
        }
    } else {
        document.getElementById("alert-email").innerHTML = "Invalid input field. Email Invalid!";
        document.getElementById("alert-email").style.visibility = "visible";
    }


    if (senha.length < 1) {
        document.getElementById("alert-password").innerHTML = "Invalid input field. Password should have at least 1 character!";
        document.getElementById("alert-password").style.visibility = "visible";
    } else {
        document.getElementById("alert-password").style.visibility = "hidden";
    }
}