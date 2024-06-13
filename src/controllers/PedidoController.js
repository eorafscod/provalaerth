const Pedido = require('../models/Pedido');

// Cria um novo pedido
async function create(req, res) {
    try {
        const pedido = new Pedido(req.body);
        const pedidoCriado = await pedido.save();
        res.status(201).json(pedidoCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os pedidos
async function getAll(req, res) {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um pedido por ID
async function getById(req, res) {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um pedido
async function update(req, res) {
    try {
        const { id } = req.params;
        const { data, hora, id_cliente, id_endereco, tempo_medio } = req.body;

        const pedido = await Pedido.findByIdAndUpdate(id, { data, hora, id_cliente, id_endereco, tempo_medio }, { new: true, runValidators: true });
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um pedido
async function remove(req, res) {
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        res.json({ message: 'Pedido removido com sucesso' });
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
