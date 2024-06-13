const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;
