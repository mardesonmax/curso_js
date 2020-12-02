class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.exibir();
    }

    exibir() {
        console.log(this.nome, this.sobrenome);
    }
}

const pessoa = new Pessoa('Mardeson', 'Pereria');