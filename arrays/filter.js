const numeros = [10, 60, 33, 55, 22, 35, 49, 2, 9, 85, 96, 5];

const numerosFiltrados = numeros.filter(numero => numero > 10);

// console.log(numerosFiltrados);




const pessoas = [
    {nome: 'Luiz', idade: 25},
    {nome: 'Maicon', idade: 19},
    {nome: 'Maria', idade: 33},
    {nome: 'Antonio', idade: 55},
    {nome: 'Thiago', idade: 16},
];

const nomes = pessoas.filter(pessoa => {
    return pessoa.nome.length > 5;
});

console.log(nomes);

const idades = pessoas.filter(pessoa => {
    return pessoa.idade > 30;
});

console.log(idades);

const nomeLetraA = pessoas.filter(pessoa => {
    return pessoa.nome.toLowerCase().endsWith('a');
})

console.log(nomeLetraA);
