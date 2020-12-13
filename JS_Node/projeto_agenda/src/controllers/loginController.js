const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    const user = req.session.user;
    if (user) {
        res.redirect('/');
        return;
    }
    res.render('login');
}

//Login
exports.login = async(req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {

            req.flash('errors', login.errors);
            req.session.dataLogin = req.body;
            req.session.save(() => {
                res.redirect('/login');
            });
            return;
        }

        const nome = login.user.name.split(' ');
        req.flash('success', `Olá, ${nome[0]} seja bem-vindo.`);
        req.session.user = login.user;
        req.session.dataLogin = null
        req.session.save(() => {
            res.redirect('/');
            return;
        });

    } catch (e) {
        res.render('404');
        console.log(e);
        return;
    }
}

//Register
exports.register = async(req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {

            req.flash('errors', login.errors);
            req.session.dateRegister = req.body;
            req.session.save(() => {
                res.redirect('/login');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.dateRegister = null;
        req.session.save(() => {
            res.redirect('/login');
            return;
        });

    } catch (e) {
        res.render('404');
        console.log(e);
        return;
    }

}

//Logout
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
}