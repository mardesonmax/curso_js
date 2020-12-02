import CPF from './CPF';

export default class GerarCPF {
    static rand(min = 100000000, max = 999999999) {
        return String(Math.ceil(Math.random() * (max - min) + min));
    }

    static formatCPF(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
    }
    static newCPF() {
        const cpfParcial = GerarCPF.rand();
        const digit1 = CPF.digit(cpfParcial);
        const digit2 = CPF.digit(cpfParcial + digit1);

        return GerarCPF.formatCPF(cpfParcial + digit1 + digit2);
    }
}