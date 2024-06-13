const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');
const pedidoController = require('../controllers/PedidoController');
const produtoController = require('../controllers/ProdutoController');
const pagamentoController = require('../controllers/PagamentoController');
const enderecoEntregaController = require('../controllers/EnderecoEntregaController');

// const clienteController = require('../controllers/clienteController');
// const pedidoController = require('../controllers/pedidoController');
// const produtoController = require('../controllers/produtoController');
// const pagamentoController = require('../controllers/pagamentoController');
// const enderecoEntregaController = require('../controllers/enderecoEntregaController');

// Rotas para Cliente
router.post('/clientes', clienteController.create);
router.get('/clientes', clienteController.getAll);
router.get('/clientes/:id', clienteController.getById);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.remove);

// Rotas para Endereço de Entrega
router.post('/enderecos', enderecoEntregaController.create);
router.get('/enderecos', enderecoEntregaController.getAll);
router.get('/enderecos/:id', enderecoEntregaController.getById);
router.put('/enderecos/:id', enderecoEntregaController.update);
router.delete('/enderecos/:id', enderecoEntregaController.remove);

// Rotas para Pagamento
router.post('/pagamentos', pagamentoController.create);
router.get('/pagamentos', pagamentoController.getAll);
router.get('/pagamentos/:id', pagamentoController.getById);
router.put('/pagamentos/:id', pagamentoController.update);
router.delete('/pagamentos/:id', pagamentoController.remove);

// Rotas para Pedido
router.post('/pedidos', pedidoController.create);
router.get('/pedidos', pedidoController.getAll);
router.get('/pedidos/:id', pedidoController.getById);
router.put('/pedidos/:id', pedidoController.update);
router.delete('/pedidos/:id', pedidoController.remove);

// Rotas para Produto
router.post('/produtos', produtoController.create);
router.get('/produtos', produtoController.getAll);
router.get('/produtos/:id', produtoController.getById);
router.put('/produtos/:id', produtoController.update);
router.delete('/produtos/:id', produtoController.remove);

module.exports = router;
