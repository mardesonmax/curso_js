exports.globalMid = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.csrfToken = req.csrfToken();
    res.locals.user = req.session.user;
    res.locals.dataLogin = req.session.dataLogin;
    res.locals.dataRigister = req.session.dateRegister;

    next();
}

exports.csrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }

    next();
}