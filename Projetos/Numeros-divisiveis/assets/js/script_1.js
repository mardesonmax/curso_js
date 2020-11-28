const maior = (x, y) => {

    if(x === y) return `${x} é ${y} tem o mesmo valor.`;

    return (x > y)? 
    `${x} é maior que ${y}.` : 
    `${y} é maior que ${x}.`;
}

console.log(maior(20, 15));