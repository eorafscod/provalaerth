const { body } = require('express-validator');

const pagamentoValidator = [
    body('tipo')
        .notEmpty().withMessage('Tipo é obrigatório.')
        .isString().withMessage('Tipo deve ser uma string.'),
    body('status')
        .notEmpty().withMessage('Status é obrigatório.')
        .isString().withMessage('Status deve ser uma string.'),
    body('id_pedido')
        .notEmpty().withMessage('ID do Pedido é obrigatório.')
        .isString().withMessage('ID do Pedido deve ser uma string.'),
    body('modalidade_cartão')
        .notEmpty().withMessage('Modalidade/Cartão é obrigatório.')
        .isString().withMessage('Modalidade/Cartão deve ser uma string.'),
    body('funcionario_update')
        .optional()
        .isString().withMessage('Funcionário Update deve ser uma string.')
];

module.exports = pagamentoValidator;
