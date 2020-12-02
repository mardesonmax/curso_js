const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    error: xhr.statusText
                });
            }
        });
    })
};

const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        loader(e.target);
    })
})

const loader = async e => {
    const href = e.href;

    const methods = {
        method: 'GET',
        url: href
    };

    try {
        const dados = await request(methods);
        result(dados);
    } catch (err) {
        result(err);
    }
}

const result = res => {
    const divRes = document.querySelector('.result');

    if (res.code) {
        divRes.innerHTML = `<span>Error: ${res.code} - ${res.error}</span>`;
        return;
    }

    divRes.innerHTML = res;
}