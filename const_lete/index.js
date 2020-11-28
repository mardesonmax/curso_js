const nome = 'Mardeson';
const sobreNome = 'Pereira';
const idade = 25;
const peso = 54;
const altura = 1.70;

const imc = (peso, altura) => {
    return peso / (altura * altura)
}

const nacimento = (idade) => {
    const data = new Date();
    const ano = data.getFullYear()
    return ano - idade
}

console.log(`${nome + ' ' + sobreNome} tem ${idade} anos, pesa ${peso} kg.`)
console.log(`tem ${parseFloat(altura).toFixed(2)} de altura e seu IMC é de ${imc(peso, altura)}.`);
console.log(`${nome} nasceu em ${nacimento(idade)}.`)