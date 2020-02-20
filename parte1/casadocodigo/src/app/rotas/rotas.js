const db = require('../../config/database')
const LivroDao = require('../DAO/livro-dao');

module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(`<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body>
                </html>`)
    });


    app.get('/livros', (req, response) => {

        const livroDao = new LivroDao(db);

        livroDao.lista()
            .then(livros =>
                response.marko(require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    })
            )
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form', (req, response) => {
        response.marko(require('../views/livros/form/form.marko'), { livro: { id: '', titulo: '', preco: '', descricao: '' } });
    });

    app.post('/livros', (req, response) => {
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao.adicionar(req.body)
            .then(
                response.redirect(`/livros`)
            )
            .catch(erro => console.log(erro));
    })

    app.put('/livros', (req, response) => {
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao.atualiza(req.body)
            .then(
                response.redirect(`/livros`)
            )
            .catch(erro => console.log(erro));
    })

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.remove(id)
            .then(() => {
                resp.status(200).end()
            })
            .catch(erro => console.log(erro));
    })

    app.get('/livros/form/:id', function (req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then(livro =>
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));

    });
}