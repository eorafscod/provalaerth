const { body } = require('express-validator');

const pedidosValidator = [
    body('data')
        .notEmpty().withMessage('Data é obrigatória.')
        .isISO8601().withMessage('Data deve estar no formato ISO8601.'),
    body('hora')
        .notEmpty().withMessage('Hora é obrigatória.')
        .isString().withMessage('Hora deve ser uma string.'),
    body('id_cliente')
        .notEmpty().withMessage('ID do Cliente é obrigatório.')
        .isString().withMessage('ID do Cliente deve ser uma string.'),
    body('id_endereço')
        .notEmpty().withMessage('ID do Endereço é obrigatório.')
        .isString().withMessage('ID do Endereço deve ser uma string.'),
    body('tempo_medio')
        .optional()
        .isNumeric().withMessage('Tempo médio deve ser um número.')
];

module.exports = pedidosValidator;
