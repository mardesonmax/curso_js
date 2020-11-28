const somar = (x, y) => {
    if(typeof x !== 'number' || typeof y  !== 'number') {
        throw Error('Inssira numeros validos!');
    }

    return x + y;
}

try {
    console.log(somar(1,5));
    console.log(somar('1',5));
} catch(error) {
    // console.log(error);
    console.log('Mensagem de error');
}