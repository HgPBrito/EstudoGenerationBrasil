"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); // Importando  o framework ExpressJS
var app = express_1.default(); // Inicializando ema aplicação ExpressJS
app.get('/', function (req, res) {
    res.send('Olá'); // Mensagem exibida no http://localhost:3000/
}); //Rota GET
app.listen(3000); // Escutando acesso ao Servidor na Porta 3000
