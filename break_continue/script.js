const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of numeros) {

    // const imparOuPar = (numero % 2 === 0) ? `${numero} é par` : `${numero} é impar`;

    if(numero === 2) continue; //Pula o numero 2
    if(numero === 8) break; //Para quando achar o numero 8

    console.log(numero);
};