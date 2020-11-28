//CPF 705.484.450-52
function ValidaCPF(cpf) {
    this.cpfLimpo = cpf.replace(/\D+/g, ''); //Deixando apenas numeros
}

//Validando cpf
ValidaCPF.prototype.validar = function() {
    if(typeof this.cpfLimpo === 'undefined') return false; //verificando se foi passado o CPF
    if(this.cpfLimpo.length !== 11) return false;   //Contando se o CPF tem 11 numeros
    if(this.isSequencia()) return false;    //Verificando se é uma sequencia

    const cpfParcial = this.cpfLimpo.slice(0, -2); //Pegando todos os numeros menos os digitos
    const digit1 = this.gerarDigito(cpfParcial); //Gerando primeiro digito
    const digit2 = this.gerarDigito(cpfParcial + digit1); //Gerando segundo digito

    const newCPF = cpfParcial + digit1 + digit2; //Juntando CPF parcial com os digitos

    return newCPF === this.cpfLimpo; //Retornando se o cpf é valido
}

//Gerando digitos
ValidaCPF.prototype.gerarDigito = function(cpfParcial) {
    const cpfArray = cpfParcial.split(''); //Trasnforamndo em array com splice()
    let contador = cpfArray.length + 1; //Contando o tamanho do array + 1

    //Multiplica todos os numeros de acordo com o tamanho do array + 1 
    //Sequencia regressiva do maior para o menor
    const total = cpfArray.reduce((ac, value) => {
        ac += (Number(value) * contador);
        contador--;
        return ac;
    }, 0); 

    //Gerando o digito
    const digito = 11 - (total % 11);
    
    //Retornando o digito
    return digito > 9 ? '0': String(digito);
}

//Verificando se não é uma sequencia
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('070.987.720-03');
const res = cpf.validar() ? 'CPF válido': 'CPF inválido';
console.log(res);
