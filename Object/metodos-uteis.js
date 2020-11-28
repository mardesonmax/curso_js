const produto = {name: 'Produto', value: 2.50};
const copia = { id: 1, ...produto}
copia.name = 'Copia';
copia.value = 30;

const { name, value } = produto;

console.log(copia);
console.log(name, value);