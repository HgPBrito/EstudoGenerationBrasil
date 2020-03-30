const express = require('express');//importando
const app = express();//criou aplicação express

app.get('/', (req, res) => {
    res.send('Hello World!');
});//rota get

app.get('/contato', (req, res) => {
    res.send('Bem vindo a página de Contato!');
});//rota get

app.listen(3000);//quando ocorrer uma solicitação na porta rode o servidor