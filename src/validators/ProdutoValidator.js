const { body } = require('express-validator');

const produtoValidator = [
    body('sanduiches')
        .notEmpty().withMessage('Sanduíches são obrigatórios.')
        .isArray().withMessage('Sanduíches devem ser um array.'),
    body('bebidas')
        .notEmpty().withMessage('Bebidas são obrigatórias.')
        .isArray().withMessage('Bebidas devem ser um array.'),
    body('preços')
        .notEmpty().withMessage('Preços são obrigatórios.')
        .isArray().withMessage('Preços devem ser um array.'),
    body('grelhados')
        .notEmpty().withMessage('Grelhados são obrigatórios.')
        .isArray().withMessage('Grelhados devem ser um array.')
];

module.exports = produtoValidator;
