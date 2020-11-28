const _acelerar = Symbol('acelerar');
const _carro = Symbol('carro')

class Carro {
    constructor(nome) {
        this[_carro] = nome;
        this[_acelerar] = 0;
    }

    set velocidade(valor) {
        if(valor < 0 || valor > 100) { 
            console.log(`Valor deve esta entre 0 e 100`);
            return;
        }
        if(isNaN(valor) || typeof valor !== 'number') {
            console.log(`"${valor}" não é um número válido`);
            return;
        } 
            
        this[_acelerar] = valor;
    }

    get velocidade() {
        return this[_acelerar];
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 55;
console.log(c1);

console.log("############################################################");

class Pessoa {
    constructor(){
        this.nome;
        this.sobrenome;
    }

    set nomeCompleto(value) {
        const nomeArray = value.split(' ');
        const nome = nomeArray.shift();
        const sobrenome = nomeArray.join(' ');
        
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    };
}

const pessoa = new Pessoa();

pessoa.nomeCompleto = 'Mardeson Pereira Barbosa'; //SET
pessoa.nomeCompleto; //GET

console.log(pessoa);