const banner = document.querySelector('.banner h1');

const efect = banner.innerText.split('');

efect.forEach((e, i) => {
    banner.innerHTML = '';
    setTimeout(() => {
        banner.innerHTML += e;
    }, i * 100);
})

