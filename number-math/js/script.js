let number = Number(prompt('Digite um número:'))

const numberId = document.getElementById('number-text')
const textId = document.getElementById('text')

if(isNaN(number) || number === 0) {
    numberId.innerHTML = `
    <p>
        Digite um número valido maior que 0. <br/>
        No lugar de virgula use ponto! <br/>
        reload em 5s. <br/>
    </p>`;

    setTimeout(() => {
        location.reload()
    }, 5000)
     
} else {

    numberId.innerHTML = number
    textId.innerHTML = `<p>Raiz quadrada: ${number ** 0.5}</p>`
    textId.innerHTML += `<p>É inteiro: ${Number.isInteger(number) ? 'Sim' : 'Não'}</p>`
    textId.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}</p>`
    textId.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}</p>`
    textId.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`
}




