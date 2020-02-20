const { check } = require('express-validator/check');


class Livro {
    static validacao() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('O Título precisa ter no mínimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O Preço deve ter um valor monetário valído!')
        ];
    }
}

module.exports = Livro;