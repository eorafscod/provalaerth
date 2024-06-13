const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    id_endereco: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EnderecoEntrega',
        required: true
    },
    tempo_medio: {
        type: Number,
        required: false
    }
});

const Pedido = mongoose.model('Pedido', PedidoSchema);
module.exports = Pedido;
