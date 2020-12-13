exports.globalMid = (req, res, next) => {

    if (req.body.nome) {
        const nome = req.body.nome;

        if (nome === 'max') {
            res.send(`Desculpa nome '${nome}', já em uso!`);
            //return;
        }
    }
    next();
}

exports.csrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
}

exports.csrfGerneration = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}