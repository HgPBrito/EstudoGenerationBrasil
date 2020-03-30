const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let rawbooks = fs.readFileSync('./books.json');
let books = JSON.parse(rawbooks);

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
    const book = req.body;

    if (Array.isArray(book)) {
        for (let item of book) {
            books.push(item);
        }
    } else {
        books.push(item);
    }

    let jsonList = JSON.stringify(books);
    fs.writeFile('./books.json', jsonList, 'utf-8', () => { });
    res.send('Livro cadastrado com sucesso!');
});

app.get('/book/:isbn', (req, res) => {
    const { isbn } = req.params;
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Livro não encontrado!!');

});

app.listen(3000);