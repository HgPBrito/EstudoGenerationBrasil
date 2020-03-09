const express = require('express');
let router = express.Router();
const fs = require('fs');

let rawbooks = fs.readFileSync('./books.json');
let books = JSON.parse(rawbooks);

router.post('/book', (req, res) => {
    const book = req.body;
    books.push(book);
    let jsonList = JSON.stringify(books);
    fs.writeFile('./books.json', jsonList, 'utf8', () => { });
    res.send("Livro adicionado!");
});
router.get('/book', (req, res) => {
    res.json(books);
});

router.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;//const { isbn } = req.params; duas formas de se fazer
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});

router.delete('/book/:isbn', (req, res) => {
    const { isbn } = req.params;
    for (let book of books) {
        if (book.isbn === isbn) {
            let index = books.indexOf(book, 0);
            books.splice(index, 1);
        }
    }
    let jsonList = JSON.stringify(books);
    fs.writeFile('./books.json', jsonList, 'utf8', () => { });
    res.send("Livro removido!");
});

router.get('/', (req, res) => {
    res.send('API de Livros')
});

module.exports = router;