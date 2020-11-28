//Retornar total dos valores
const numeros = [10, 60, 33, 55, 22, 35, 49, 2, 9, 85, 96, 5];

const total = numeros.reduce((res, numero) => {
    return res += numero;
});

// console.log(total);


//Retornar pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 25},
    {nome: 'Maicon', idade: 19},
    {nome: 'Maria', idade: 33},
    {nome: 'Antonio', idade: 55},
    {nome: 'Thiago', idade: 16},
];

const maisVelha = pessoas.reduce((res, pessoa) => {
    if(res.idade > pessoa.idade) return res;
    return pessoa;
});

console.log(maisVelha);



