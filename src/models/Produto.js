const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    sanduiches: {
        type: [String],
        required: true
    },
    bebidas: {
        type: [String],
        required: true
    },
    preços: {
        type: [Number],
        required: true
    },
    grelhados: {
        type: [String],
        required: true
    }
});

const Produto = mongoose.model('Produto', ProdutoSchema);
module.exports = Produto;
