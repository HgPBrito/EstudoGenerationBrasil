document.getElementById('btn').addEventListener('click', () => {

    let letra = document.getElementById('text').value;
    // let letras = palavra.split("");
    // let palavraInvertida = palavra.split("").reverse().join("");

    // for (let i = 0; i < palavra.length; i++) {
    //     if (i < (palavra.length - 1)) {
    //         document.write(palavra[i] + ", ");
    //     } else {
    //         document.write(palavra[i] + ". ");
    //     }


    // }

    for (let i = 0; i < letra.length; i++) {
        document.write(letra[i]);
        let char = letra[i];
        for (let j = 0; j < letra.length; j++) {

            if (i < j) {
                char = char + letra[j];
                document.write(char + ", ");
            }

        }
    }
});