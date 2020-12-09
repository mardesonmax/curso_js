exports.home = (req, res) => {
    // req.session.user = {
    //     nome: 'MAX',
    //     connect: true
    // }

    // req.flash('error', 'Login invalido!');

    console.log(req.session.user);
    console.log(req.flash('error'));

    res.render('home');
}

exports.homePost = (req, res) => {
    const nome = req.body.nome
    res.send(`Olá ${nome}, seja bem-vindo!`);
}