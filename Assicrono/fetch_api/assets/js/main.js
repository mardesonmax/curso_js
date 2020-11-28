const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        loader(e.target);
    })
})

const loader = async e => {
    const href = e.href;

    try {
        const data = await fetch(href);

        if (data.status !== 200) throw {
            code: data.status,
            error: data.statusText
        }

        const text = await data.text();
        result(text);

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