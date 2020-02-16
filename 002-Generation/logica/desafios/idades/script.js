document.getElementById("btn1").addEventListener("click", function () {
    let idades = document.getElementById("idade").value;
    idades = idades.split(',');    
    let idadeMaior = 0;
    let idadeMenor = 0;

    for (let i = 0; i < idades.length; i++) {
        if( parseInt(idades[i]) >= 18){
            idadeMaior++;
        } else { 
            idadeMenor++;
        }        
    }
    document.write("Idades maiores: " + idadeMaior + " | Idades menores: " + idadeMenor);
});