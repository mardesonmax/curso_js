const rand = (min, max) => {

    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

const mensagem = (msg, time) => {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') return reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, time)
    });
}

mensagem('Conectando com BD...', rand(1, 3))
    .then(res => {
        console.log(res); // 1 promise
        return mensagem('Buscando dados...', rand(1, 3));
    })
    .then(res => {
        console.log(res); // 2 promise
        // return mensagem('Tratando os dados...', rand(1, 3));
        return mensagem(123, rand(1, 3));
    })
    .then(res => {
        console.log(res); // 3 promise
    })
    .then(() => {
        console.log('Exibindo dados...');
    })
    .catch(e => {
        console.log(`Error: ${e}`);
    });