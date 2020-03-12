import express from 'express';// Importando  o framework ExpressJS
const app = express();// Inicializando ema aplicação ExpressJS

app.get('/', (req, res) => {
    res.send('Chuchu Beleza');// Mensagem exibida no http://localhost:3000/

});//Rota GET

app.listen(3000);// Escutando acesso ao Servidor na Porta 3000