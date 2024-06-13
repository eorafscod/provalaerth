const EnderecoEntrega = require('../models/EnderecoEntrega');

// Cria um novo endereço de entrega
async function create(req, res) {
    try {
        const enderecoEntrega = new EnderecoEntrega(req.body);
        const enderecoEntregaCriado = await enderecoEntrega.save();
        res.status(201).json(enderecoEntregaCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os endereços de entrega
async function getAll(req, res) {
    try {
        const enderecosEntrega = await EnderecoEntrega.find();
        res.json(enderecosEntrega);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um endereço de entrega por ID
async function getById(req, res) {
    try {
        const enderecoEntrega = await EnderecoEntrega.findById(req.params.id);
        if (!enderecoEntrega) {
            return res.status(404).json({ error: 'Endereço de entrega não encontrado' });
        }
        res.json(enderecoEntrega);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um endereço de entrega
async function update(req, res) {
    try {
        const { id } = req.params;
        const { rua, numero, bairro, cidade, cep } = req.body;

        const enderecoEntrega = await EnderecoEntrega.findByIdAndUpdate(id, { rua, numero, bairro, cidade, cep }, { new: true, runValidators: true });
        if (!enderecoEntrega) {
            return res.status(404).json({ error: 'Endereço de entrega não encontrado' });
        }
        res.json(enderecoEntrega);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um endereço de entrega
async function remove(req, res) {
    try {
        const enderecoEntrega = await EnderecoEntrega.findByIdAndDelete(req.params.id);
        if (!enderecoEntrega) {
            return res.status(404).json({ error: 'Endereço de entrega não encontrado' });
        }
        res.json({ message: 'Endereço de entrega removido com sucesso' });
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
