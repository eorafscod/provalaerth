const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id_pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido',
        required: true
    },
    modalidade_cartao: {
        type: String,
        required: true
    },
    funcionario_update: {
        type: String,
        required: false
    }
});

const Pagamento = mongoose.model('Pagamento', PagamentoSchema);
module.exports = Pagamento;
