const rand = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const mensagem = (msg, time) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') return reject('BAD VALUE');
            resolve(`${msg.toUpperCase()} - passou com sucesso.`);
        }, time)
    });
}

/*

const pormises = [
    mensagem('Promise 1', rand(1, 3)),
    mensagem('Promise 2', rand(1, 3)),
    mensagem('Promise 3', rand(1, 3)),
    // mensagem(111, 1500),
];

// Promise.all(pormises)
Promise.race(pormises)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });

*/
const pagina = () => {
    const emCache = true;

    if (emCache) {
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return mensagem('Baixei a página', 3000);
    }
}

pagina()
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });