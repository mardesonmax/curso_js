const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    createdIn: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.validate();

        if (this.errors.length > 0) return;

        this.contato = await ContatoModel.create(this.body);
    }
    static async getContato(id) {
        if (typeof id !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    }
    validate() {
        this.clearUp();

        //validando email
        if (this.body.name.length < 3) this.errors.push('Adicione no mínimo 3 caracteres ao nome.');
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
        if (this.body.number.length < 8) this.errors.push('Número inválido!');
    }

    clearUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            email: this.body.email,
            number: this.body.number
        }
    }
}

module.exports = Contato;