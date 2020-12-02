function promises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Olá mundo!');
        }, 2000);
    });
}

export default async() => {
    const div = document.querySelector('.result');
    const res = await promises();

    div.innerHTML = res;
}