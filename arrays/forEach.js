const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((valor, indice, array) => {

    console.log(array.slice(0, indice));

})