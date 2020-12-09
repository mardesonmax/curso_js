module.exports = (req, res, next) => {

    if (req.body.nome) {
        const nome = req.body.nome;

        if (nome === 'max') {
            res.send(`Desculpa nome '${nome}', já em uso!`);
            //return;
        }
    }
    next();
}