import GerarCPF from './modules/GerarCPF';
const gerar = () => {
    const div = document.querySelector('.result');
    const resultCPF = GerarCPF.newCPF();
    div.innerHTML = resultCPF;
}

const button = document.querySelector('.gerar-cpf');
button.addEventListener('click', () => {
    gerar();
});

import './assets/css/style.css';