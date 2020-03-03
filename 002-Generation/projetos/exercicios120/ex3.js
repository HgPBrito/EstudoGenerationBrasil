// document.getElementById('btn').addEventListener('click', () => {

//     let letras = document.getElementById('text').value;    

//     for (let i = 0; i < letras.length; i++) {
//         document.write(letras[i]);
//         let char = letras[i];
//         for (let j = 0; j < letras.length; j++) {

//             if (i < j) {
//                 char = char + letras[j];
//                 document.write(char + ", ");
//             }

//         }
//     }
// });

function verificaComparacoes(letras) {
    for (let i = 0; i < letras.length; i++) {
        document.write(letras[i] + ", ");
        let char = letras[i];
        for (let j = 0; j < letras.length; j++) {


            if (char.indexOf(letras[j])) {
                char = char + letras[j];
                document.write(char + ", ");
            }

        }
    }
}

// document.getElementById('btn').addEventListener('click', () => {

//     let palavra = document.getElementById('text').value;
//     let letras = palavra.split("");
//     let letrasInvertida = palavra.split("").reverse();


//     // for (let i = 0; i < palavra.length; i++) {
//     //     if (i < (palavra.length - 1)) {
//     //         document.write(palavra[i] + ", ");
//     //     } else {
//     //         document.write(palavra[i] + ". ");
//     //     }


//     // }

//     verificaComparacoes(letras);
//     verificaComparacoes(letrasInvertida);

// });



function comparacoesCompleta(palavra) {
    let cont = 0;
    let letras = palavra.split("");
    let letrasInvertida = palavra.split("").reverse();
    let completo = comparacoes(cont, letras)[1];
    cont = comparacoes(cont, letras)[0];
    completo += comparacoes(cont, letrasInvertida)[1];
    return completo;

}

function comparacoes(cont, letras) {
    let todasPalavras = '';
    for (let i = 0; i < letras.length; i++) {
        if (cont == 0) {
            todasPalavras += letras[i] + ", ";
        }
        let char = letras[i];
        for (let j = 0; j < letras.length; j++) {

            if (char.indexOf(letras[j])) {
                char = char + letras[j];
                todasPalavras += char + ", ";
            }

        }
    }
    cont++;
    return [cont, todasPalavras];
}

document.getElementById('btn').addEventListener('click', () => {
    let todasPalavras = '';
    let palavra = document.getElementById('text').value;



    // for (let i = 0; i < palavra.length; i++) {
    //     if (i < (palavra.length - 1)) {
    //         document.write(palavra[i] + ", ");
    //     } else {
    //         document.write(palavra[i] + ". ");
    //     }


    // }

    document.write(comparacoesCompleta(palavra));

});