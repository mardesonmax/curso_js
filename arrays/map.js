const numeros = [10, 60, 33, 55, 22, 35, 49, 2, 9, 85, 96, 5];

const multipli = numeros.map(numero => {
    return numero * 2;
});

// console.log(multipli);

const pessoas = [
    {nome: 'Luiz', idade: 25},
    {nome: 'Maicon', idade: 19},
    {nome: 'Maria', idade: 33},
    {nome: 'Antonio', idade: 55},
    {nome: 'Thiago', idade: 16},
];

const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => ({idade: pessoa.idade}));
const ids = pessoas.map((pessoa, i) => ({id: ++i, ...pessoa}));

console.log(ids);