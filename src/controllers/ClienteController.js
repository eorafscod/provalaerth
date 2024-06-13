const Cliente = require('../models/Cliente');

// Cria um novo cliente
async function create(req, res) {
    try {
        const cliente = new Cliente(req.body);
        const clienteCriado = await cliente.save();
        res.status(201).json(clienteCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os clientes
async function getAll(req, res) {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um cliente por ID
async function getById(req, res) {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um cliente
async function update(req, res) {
    try {
        const { id } = req.params;
        const { nome, telefone, cpf, endereco, sexo } = req.body;

        const cliente = await Cliente.findByIdAndUpdate(id, { nome, telefone, cpf, endereco, sexo }, { new: true, runValidators: true });
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um cliente
async function remove(req, res) {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente removido com sucesso' });
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
