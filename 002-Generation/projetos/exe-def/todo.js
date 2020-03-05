let todoList = new Array();

function addTodoItem(todo) {
    let ul = document.getElementById("todosList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
    todoList.push(todo);

}

function showErrorMessage(message) {
    let alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function validTodo(todo) {
    if (todo.description.length === 0) {
        showErrorMessage("Descrição Obrigatória");
    } else if (todo.dueDate.length === 0) {
        showErrorMessage("Data Obrigatória");
    } else {
        hideErrorMessage();
        return true;
    }
    return false;
}

function Todo(description, dueDate) {
    return {
        "description": description,
        "dueDate": dueDate
    };
}

document.getElementById('btn-add').addEventListener('click', () => {
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    dueDate = dueDate.split("-").reverse().join(" \/ ");

    let todo = Todo(description, dueDate);

    if (validTodo(todo)) {
        addTodoItem(todo);
    }
    console.log(todoList);

});
document.getElementById('btn-remove').addEventListener('click', () => {
    let ul = document.getElementById('todosList');
    ul.innerHTML = '';
    todoList = [];

});
