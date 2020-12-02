const criaMultipli = (multipli) => {
    return (n) => {
        return n * multipli;
    };
};

const duplica = criaMultipli(2);
const triplica = criaMultipli(3);
const quadriplica = criaMultipli(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));

