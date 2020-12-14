exports.globalMid = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.csrfToken = req.csrfToken();
    res.locals.user = req.session.user;
    res.locals.dataLogin = req.session.dataLogin;
    res.locals.dataRigister = req.session.dateRegister;
    res.locals.dataContato = req.session.dataContato;

    next();
}

exports.csrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }

    next();
}

exports.verifiLogin = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa esta logado para visitar outras páginas.');
        req.session.save(() => res.redirect('/login'));
        return;
    }

    next();
}