const Pagamento = require('../models/Pagamento');

// Cria um novo pagamento
async function create(req, res) {
    try {
        const pagamento = new Pagamento(req.body);
        const pagamentoCriado = await pagamento.save();
        res.status(201).json(pagamentoCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os pagamentos
async function getAll(req, res) {
    try {
        const pagamentos = await Pagamento.find();
        res.json(pagamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um pagamento por ID
async function getById(req, res) {
    try {
        const pagamento = await Pagamento.findById(req.params.id);
        if (!pagamento) {
            return res.status(404).json({ error: 'Pagamento não encontrado' });
        }
        res.json(pagamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um pagamento
async function update(req, res) {
    try {
        const { id } = req.params;
        const { tipo, status, id_pedido, modalidade } = req.body;

        const pagamento = await Pagamento.findByIdAndUpdate(id, { tipo, status, id_pedido, modalidade }, { new: true, runValidators: true });
        if (!pagamento) {
            return res.status(404).json({ error: 'Pagamento não encontrado' });
        }
        res.json(pagamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um pagamento
async function remove(req, res) {
    try {
        const pagamento = await Pagamento.findByIdAndDelete(req.params.id);
        if (!pagamento) {
            return res.status(404).json({ error: 'Pagamento não encontrado' });
        }
        res.json({ message: 'Pagamento removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
