const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const port = 3000;

app.disable('x-powered-by');

// leitura do arquivo books.json atraves do modulo fs de forma sincrona


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => {
    console.log(`API REST Rodando na porta: http:localhost:${port}`);
});