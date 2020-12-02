export class Pessoa {
    constructor(nome, snome, idade) {
        this.nome = nome;
        this.snome = snome;
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} esta falando...`);
    }

    anoNac() {
        const date = new Date();
        const year = date.getFullYear();
        console.log(`Ano de nacimento: ${year - this.idade}`);
    }
}

//Exportado por padrão
export default (x, y) => `${x} + ${y} = ${x+y}`;