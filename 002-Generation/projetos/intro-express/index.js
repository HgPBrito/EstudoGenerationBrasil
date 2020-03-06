const express = require('express'); // importando o fremwork
const port = 3000;// definindo a porta da aplicacao

let app = express();//iniciando uma aplicacao Express

app.get('/', (req, res)=>{ //criando rota GET
    res.send('Hello World');//resposta do servidor
});

app.get('/contato', (req, res)=>{ //criando rota GET
    res.send('Contato');//resposta do servidor
});


app.listen(port, ()=>{
    console.log(`Servidor executando em http://localhost:${port}`); //mensagem no console com template string
});//executando uma requesicao na porta 3000