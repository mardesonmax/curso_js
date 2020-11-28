const nome = prompt('Digite seu nome:');
const email = prompt('Digite seu email:');
const idade = prompt('Qual sua idade:');
const res = confirm('Deseja receber nossas noticias?');


const root = document.getElementById('root')

const nacimento = () => {
    const data = new Date()
    const ano = data.getFullYear()

    return ano - idade
}

const htmlRes = `
    <h1>Nome: ${nome}</h1>  
    <p>Email: ${email}</p>
    <p>Idade: ${idade} anos - Nascido em ${nacimento()}</p>
    <p>Notícias: ${res? 'Sim' : 'Não'}</p>
`;

root.innerHTML = htmlRes
document.title = `Olá ${nome}`;