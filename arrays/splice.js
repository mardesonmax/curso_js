const nomes = ['Julia', 'Maria', 'João'];

const update = (indice, valor) => {
    nomes.splice(indice, 1, valor);
}

update(0, 'MAX');

console.log(nomes);


//Removendo dois numeros da frente
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const removerDois = numeros.splice(0, 2);

console.log(numeros, removerDois);