const rand = (min = 0, max = 3) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const mensagem = (msg, time) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') return reject('CAIMOS NO ERROR');
            resolve(`${msg.toUpperCase()} - passou com sucesso.`);
        }, time)
    });
}


const executar = async() => {
    try {
        const fase1 = await mensagem('Fase 1', rand());
        console.log(fase1);

        const fase2 = await mensagem('Fase 2', rand());
        console.log(fase2);

        const fase3 = await mensagem('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos...');

    } catch (error) {
        console.log(error);
    }
}

executar();