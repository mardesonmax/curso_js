const funcao = (...params) => {
    let total = 0;

    params.map(valor => {
        total += valor;
    });

    console.log(total);
};

funcao(1, 2, 30, 40, 58);
