document.getElementById("btn").addEventListener('click', () => {
    window.open('https://www.google.com.br', '_blank');
});

document.getElementById("btn1").addEventListener('click', () => {
    window.location.href = 'https://www.github.com';
});

document.getElementById("btn2").addEventListener('click', () => {
    for (let i = 0; i < document.querySelectorAll(".cor").length; i++) {
        document.querySelectorAll(".cor")[i].style.backgroundColor = "red";
    }

});
document.getElementById("btn2").addEventListener('mouseout', () => {
    for (let i = 0; i < document.querySelectorAll(".cor").length; i++) {
        document.querySelectorAll(".cor")[i].style.backgroundColor = "black";
    }

    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
        document.querySelectorAll("button")[i].style.display = "none";
    }
});

// arrow function
const showMessage1 = () => {
    alert('Message 1');
};

// const Lambda = anonymous function
const showMessage2 = function () {
    alert('Message 2');
};

// tradicional
function ShowMessage3() {
    alert('Message 3');
};

// var n1 = 10;
// var n2 = 15;

// const soma = (n1, n2) => {
//     alert(n1 + n2);
// }

// soma(n1, n2);

showMessage1();
showMessage2();
showMessage3();