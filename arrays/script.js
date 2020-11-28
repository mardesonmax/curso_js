//                0          1       2       3        4
const nomes = ['Maicon', 'Thiago', 'Max', 'Maria', 'João'];

// const primeiro = nomes.shift(); //Remove e retorna o primeiro indice 
// const ultimo = nomes.pop();   //Remove e retorna o ultimo indice

// nomes.push('Maria', 'João'); //Adiciona novos elementos ao array

// const fatiar = nomes.slice(0, 3);  //Exibe 3 indices apartir do 0

// const novoNomes = nomes.join(', '); //Juntando todo o array em string e separando por virgular

// const nomesArray = novoNomes.split(','); //Separando string onde tiver a virgula e criando um array

const dados = [];

nomesArray.map(nome => {   
    dados.push(nome.trim()); //Removendo espaços em banco
}); 

console.log(dados);

console.log(nomesArray);



