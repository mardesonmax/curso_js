const criaPessoa = (nome, sobrenome, altura, peso) => {
    return {
        nome,
        sobrenome,
        get nomeCompeto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        altura,
        peso,
        get imc() {
            const valor = this.peso / (this.altura ** 2);
            
            return valor.toFixed(2);
        },
        set nomeSobrenome(valor) {
            const data = valor.split(' '); //Divide o nome em um array
            this.nome = data.shift(); //Remove e retorna o primeiro do array
            this.sobrenome = data.join(' '); //Junta o restante do array
        }
    }
}

const p1 = criaPessoa('Mardeson', 'Pereira', 1.70, 55);
p1.nomeSobrenome = "Max Pereira Barbosa";
console.log(p1.nomeCompeto);
console.log(p1.imc);