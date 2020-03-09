const express = require('express'); // importando o fremwork

const routes = require('./routes'); // importa as rotas

let app = express();//iniciando uma aplicacao Express

const port = 3000;// definindo a porta da aplicacao

app.disable('x-powered-by');//Oculta a informação do framework utilizado, nos headers

app.use(routes); // inicia o modulo rotas

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`); //mensagem no console com template string
});//executando uma requesicao na porta 3000