const port = 3000;
const app = require('express')();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Enviado...');
})

app.listen(port, () => {
    console.log(`Link http://localhost:${port}`);
    console.log(`Server on port.: ${port}`);
})