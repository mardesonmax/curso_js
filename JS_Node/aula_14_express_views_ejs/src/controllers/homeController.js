exports.home = (req, res) => {
    res.render('home', {
        titulo: "Titulo da página",
    });
}

exports.homePost = (req, res) => {
    const nome = req.body.nome
    res.send(`Olá ${nome}, seja bem-vindo!`);
}