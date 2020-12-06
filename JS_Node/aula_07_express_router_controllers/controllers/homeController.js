exports.home = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
}

exports.homePost = (req, res) => {
    const nome = req.body.nome
    res.send(`Olá ${nome}, seja bem-vindo!`);
}