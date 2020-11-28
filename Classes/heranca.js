class Eletronico {
    constructor(nome) {
        this.nome = nome;
        this.status = false;
    }

    ligar() {
        if(this.status) {
            console.log(`${this.nome} já esta ligado.`);
            return;
        }

        console.log(`${this.nome} lingando...`);
        this.status = true;
    }

    desligar() {
        if(!this.status) {
            console.log(`${this.nome} já esta desligado.`);
            return;
        }

        console.log(`${this.nome} deslingando...`);
        this.status = false;
    }

    static msg() {
        console.log('Mensagem para todos os dispositivos.');
    }
}

class Smartphone extends Eletronico{
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const sm = new Smartphone('Samsung', 'Preto', 'Galaxy S10');

Eletronico.msg();
