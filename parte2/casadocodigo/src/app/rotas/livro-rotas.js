const LivroControlador = require('../Controladores/livro-controlador')
const livroControlador = new LivroControlador();
const Livro = require('../modelos/livro')

module.exports = (app) => {
    const rotasLivros = LivroControlador.rotas();

    app.get(rotasLivros.lista, livroControlador.lista());

    app.route(rotasLivros.cadastro)
        .get(livroControlador.formularioCadastrar())
        .post(Livro.validacao(), livroControlador.cadastra())
        .put(Livro.validacao(), livroControlador.edita());

    app.get(rotasLivros.edicao, livroControlador.formularioEditar());

    app.delete(rotasLivros.delecao, livroControlador.remove());
};