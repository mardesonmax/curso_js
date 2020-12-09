exports.home = (req, res) => {
    res.render('home');
}

exports.homePost = (req, res) => {
    const nome = req.body.nome
    res.send(`Olá ${nome}, seja bem-vindo!`);
}