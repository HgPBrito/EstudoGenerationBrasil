const express = require('express');

const app = express();

//query params = ?nome=hugo
app.get('/users', (req, res) => {
    const { nome } = req.query;
    res.json({ mensagem: `${nome}` });
});

//route params = http://localhost:3000/users/2
app.get('/contato/:id', (req, res) => {
    const { id } = req.params;
    res.json({ mensagem: `${id}` });
});


app.listen(3000);