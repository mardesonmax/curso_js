const port = 3000;
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

//localhost:3000/user/123456?nome=max&sobrenome=pereira
app.get('/user/:id?', (req, res) => {
    //params
    const params = `Params: ${JSON.stringify(req.params)} </br>`;
    //query
    const query = `Query: ${JSON.stringify(req.query)} </br>`

    res.send(params + query);
});

app.post('/', (req, res) => {
    //body
    const body = `Body: ${JSON.stringify(req.body)}`
    res.send(body);
})

app.listen(port, () => {
    console.log(`Link http://localhost:${port}`);
    console.log(`Server on port.: ${port}`);
})