const falar = {
    falar() {
        console.log(`${this.nome} esta falando.`);
    }
}

const alimentar = {
    comer() {
        console.log(`${this.nome} esta comendo.`);
    },
    beber() {
        console.log(`${this.nome} esta bebendo.`);
    }
}

const pessoaPrototype = {...falar, ...alimentar }

const pessoa = (nome, sobrenome) => {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = pessoa('Mardeson', 'Pereira');
