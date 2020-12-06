class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} esta falando...`;
    }
}

module.exports = Pessoa;