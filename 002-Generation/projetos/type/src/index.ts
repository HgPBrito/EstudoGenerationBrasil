import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Abaxi');
});

app.listen(3000);
