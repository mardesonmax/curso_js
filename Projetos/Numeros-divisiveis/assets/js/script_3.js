const form = document.querySelector('#form');
const formNumber = form.querySelector('#number');
const root = document.querySelector('#root');

const verify = (number) => {
    let res = [];

    if(!isNaN(+number) && (number >= 1) && (number <= 200)) {

        for(let x=1; x <= number; x++) {
            if((x % 3) === 0 && ( x % 5) === 0) {
                res.push(`O número '${x}' é divisível por 3 e 5. 
                    <p>Resultado: <strong>${x} ÷ 3 = ${x/3}</strong> <strong>${x} ÷ 5 = ${x/5}</strong></p>
                `);
            } else if((x % 3) === 0) {
                res.push(`O número '${x}' é divisível por 3. 
                <p>Resultado: <strong> ${x} ÷ 3 = ${x/3}</strong><p>
                `);
            } else if((x % 5) === 0) {
                res.push(`O número '${x}' é divisível por 5.
                <p>Resultado: <strong> ${x} ÷ 5 = ${x/5}</strong><p> 
                `);
            } else {
                res.push(`O número '${x}' não é divisível por 3 nem 5.`);
            }
        }

        document.title = `Divisível por 3 ou 5 ate ${number}`

    } else {
        let error = [];

        if(isNaN(+number)) {
            error.push(`"${number}" não é um número!`);
        } else if(number <= 0) {
            error.push('Insira um número maior que 0!');
        } else {
            error.push(`"${number}" por questão de performace o número deve ser menor ou igual 200!`);
        }

        throw Error(error);
        
    };

    return res;
    
}

form.onsubmit = e => {
    e.preventDefault();
    
    try {
        const res = verify(formNumber.value);

        root.innerHTML = '';
        res.map(num => {
            root.innerHTML += `<div class="resNumber">${num}</div>`;
        });
    } catch(error) {
        root.innerHTML = `<div class="resNumber" style="box-shadow: 2px 2px 6px red; color: red;">${error}</div>`;
    }

}
