const validator = require('validator'); //Validar Email
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); //Criptografar uma senha

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

//Register
class User {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    //Login
    async login() {
        this.validate();

        const user = await UserModel.findOne({
            email: this.body.email
        });

        if (!user || !bcryptjs.compareSync(this.body.password, user.password)) {
            this.errors.push('Usuário ou/e Senha inválidos.');
        }

        if (this.errors.length > 0) return;

        this.user = user;
    }

    //Register
    async register() {
        this.validate();
        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await UserModel.create(this.body);

    }

    async userExists() {
        const user = await UserModel.findOne({
            email: this.body.email
        });

        if (user) {
            this.errors.push(`E-mail já possui um cadastro.`);
        };
    }

    validate() {
        this.clearUp();

        //validando email
        if (this.body.name && this.body.name.length < 3) {
            this.errors.push('Seu nome deve conter no mínimo 3 caracteres.');
        }
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push('A senha deve ter entre 3 a 50 caracteres.');
        }

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
            password: this.body.password
        }
    }
}

module.exports = User;