const path = require('path');
const local = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');

const pessoas = [
    { nome: "Mardeson" },
    { nome: "Maicon" },
    { nome: "Marcelo" },
    { nome: "Marcos" },
]

const json = JSON.stringify(pessoas, '', 2);

escreve(local, json);

/*********************************************/

ler(local)
    .then(dados => {

        const obj = JSON.parse(dados);

        obj.forEach(pessoa => {
            console.log(pessoa.nome);
        });
    })
    .catch(e => console.log(e));