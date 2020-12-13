exports.index = (req, res) => {
    const user = req.session.user;

    if (!user) {
        res.redirect('/login');
        return;
    }
    res.render('index');
}