const { body } = require('express-validator');

const enderecoEntregaValidator = [
    body('rua')
        .notEmpty().withMessage('Rua é obrigatória.')
        .isString().withMessage('Rua deve ser uma string.'),
    body('numero')
        .notEmpty().withMessage('Número é obrigatório.')
        .isNumeric().withMessage('Número deve ser um número.'),
    body('bairro')
        .notEmpty().withMessage('Bairro é obrigatório.')
        .isString().withMessage('Bairro deve ser uma string.'),
    body('cidade')
        .notEmpty().withMessage('Cidade é obrigatória.')
        .isString().withMessage('Cidade deve ser uma string.'),
    body('cep')
        .notEmpty().withMessage('CEP é obrigatório.')
        .isString().withMessage('CEP deve ser uma string.')
];

module.exports = enderecoEntregaValidator;
