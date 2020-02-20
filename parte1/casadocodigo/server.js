const app = require('./src/config/custom-express');

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})



/* nodejs puro
const http = require('http')
const servidor = http.createServer((require, response) => {

    let callback

    if (require.url == '/') {
        callback = `<html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1> Casa do Código </h1>
                        </body>
                    </html>`
    } else if (require.url == '/livros') {
        callback = `<html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1> Listagem livros </h1>
                        </body>
                    </html>`
    } else {
        callback = `<html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1> 404 Not Found </h1>
                        </body>
                    </html>`
    }

    response.end(callback);
});
servidor.listen(3000);
*/