// const axios = require('axios');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(res => console.log(res.data))
//     .catch(e => console.log(e));

const Pessoa = require('./mod1');

const pessoa = new Pessoa('Mardeson');

console.log(pessoa.falar());

/*********************************************/
const path = require('path');

console.log(path.resolve(__dirname, '..'));