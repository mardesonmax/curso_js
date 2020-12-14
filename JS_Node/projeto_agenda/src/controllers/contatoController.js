const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {

    res.render('contato', { contato: null });
}

exports.register = async(req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.dataContato = req.body
            req.session.save(() => res.redirect('/contato'));
            return;
        }

        req.flash('success', 'Contato criado com sucesso.');
        req.session.dataContato = null;
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
        return;

    } catch (e) {
        console.log(e);
        res.render('404');
        return;
    }
}

exports.edit = async(req, res) => {
    if (!req.params.id) return res.redirect('404');

    const contato = await Contato.getContato(req.params.id);

    if (!contato) return res.redirect('404');

    res.render('contato', { contato });
}