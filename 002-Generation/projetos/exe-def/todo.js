var listaDeTodos = [];

function addTodoItem(todo) {
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
}

function showErrorMessage(message) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function onAddClicked() {
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;

    dueDate = dueDate.split("-").reverse().join(" \/ ");

    var todo = new Todo(description, dueDate);

    addTodoItem(todo);
    listaDeTodos.push(todo);

}

function validTodo(todo) {
}

function clearTodos() {


}

function Todo(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
}





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