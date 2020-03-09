const express = require('express'); // importando o fremwork
let router = express.Router();// inicializa o modulo de rotas do express

router.get('/', (req, res) => { //criando rota GET
    res.send('Hello World');//resposta do servidor
});

router.get('/contato', (req, res) => { //criando rota GET
    res.send('Contato');//resposta do servidor
});

router.get('/produtos', (req, res) => { //criando rota GET
    res.send('Produtos');//resposta do servidor
});

router.post('/produtos', (req, res) => { //criando rota POST
    res.send('Serviços');//resposta do servidor
});

module.exports = router;// exporta o modulo de rotas