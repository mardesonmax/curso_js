export default class GerarSenha {
    constructor() {
        this.form = document.querySelector('form');
        this.div = document.querySelector('.result');

        this.execult();
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    number() {
        return String.fromCharCode(this.rand(48, 57));
    }

    maiuscula() {
        return String.fromCharCode(this.rand(65, 90));
    }

    minuscula() {
        return String.fromCharCode(this.rand(97, 122));
    }

    simbolo() {
        const simbolos = [
            { min: 33, max: 47 },
            { min: 58, max: 64 },
            { min: 91, max: 96 },
            { min: 123, max: 126 },
        ]

        const position = simbolos[this.rand(0, simbolos.length)];

        return String.fromCharCode(this.rand(position.min, position.max));
    }

    newPassword(qtd, maius, minus, simb, number) {
        qtd = Number(qtd);
        const resltPass = [];

        for (let x = 0; x < qtd; x++) {
            maius && resltPass.push(this.maiuscula());
            minus && resltPass.push(this.minuscula());
            simb && resltPass.push(this.simbolo());
            number && resltPass.push(this.number());
        }

        return resltPass.join('').slice(0, qtd);

    }

    execult() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.result = [];

            const qtd = this.form.querySelector('#qtd').value;
            const maius = this.form.querySelector('#chek-mai').checked;
            const minus = this.form.querySelector('#chek-min').checked;
            const simbo = this.form.querySelector('#chek-simb').checked;
            const number = this.form.querySelector('#chek-number').checked;

            this.div.innerHTML = this.newPassword(qtd, maius, minus, simbo, number);

        })
    }
}