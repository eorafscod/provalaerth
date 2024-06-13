const Produto = require('../models/Produto');

// Cria um novo produto
async function create(req, res) {
    try {
        const produto = new Produto(req.body);
        const produtoCriado = await produto.save();
        res.status(201).json(produtoCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os produtos
async function getAll(req, res) {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um produto por ID
async function getById(req, res) {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um produto
async function update(req, res) {
    try {
        const { id } = req.params;
        const { sanduiches, bebidas, precos, grelhados } = req.body;

        const produto = await Produto.findByIdAndUpdate(id, { sanduiches, bebidas, precos, grelhados }, { new: true, runValidators: true });
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(produto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um produto
async function remove(req, res) {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto removido com sucesso' });
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
