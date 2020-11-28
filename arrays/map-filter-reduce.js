const numeros = [10, 60, 33, 55, 22, 35, 49, 2, 9, 85, 96, 5];

const result = numeros.filter(numero => {

    return numero % 2 === 0; //Retoranndo os numero pares

}).map(numero => {

    return numero * 2; //Multiplicando os numeros

}).reduce((total, numero) => {

    return total += numero; //Somando todos os numeros

});

console.log(result);