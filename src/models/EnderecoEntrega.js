const mongoose = require('mongoose');

const EnderecoEntregaSchema = new mongoose.Schema({
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    }
});

const EnderecoEntrega = mongoose.model('EnderecoEntrega', EnderecoEntregaSchema);
module.exports = EnderecoEntrega;
