const express = require('express');
const app = express();
const PORT = 3000;

// Carrega variáveis de ambiente do arquivo .env
require('dotenv').config();

// Conexão com o banco de dados
const DBConect = require('./database/connection');
DBConect();

// Middleware para analisar JSON
app.use(express.json());



// Rotas gerais
const routes = require('./routes/routes');
app.use(routes);

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});