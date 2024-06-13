const { body } = require('express-validator');

const clienteValidator = [
    body('nome')
        .notEmpty().withMessage('Nome é obrigatório.')
        .isString().withMessage('Nome deve ser uma string.'),
    body('telefone')
        .notEmpty().withMessage('Telefone é obrigatório.')
        .isNumeric().withMessage('Telefone deve ser um número.'),
    body('cpf')
        .notEmpty().withMessage('CPF é obrigatório.')
        .isString().withMessage('CPF deve ser uma string.'),
    body('endereço')
        .notEmpty().withMessage('Endereço é obrigatório.')
        .isNumeric().withMessage('Endereço deve ser um número.'),
    body('sexo')
        .notEmpty().withMessage('Sexo é obrigatório.')
        .isString().withMessage('Sexo deve ser uma string.')
];

module.exports = clienteValidator;
