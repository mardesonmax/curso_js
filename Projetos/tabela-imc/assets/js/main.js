(_ => {
    const form = document.querySelector('#form-imc');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    const pesoErro = document.querySelector('#pesso-erro');
    const alturaErro = document.querySelector('#altura-erro');
    const result = document.querySelector('#result');

    let error = false;

    const validation = (valor) => {

        valor = Number(valor.replace(",", "."));

        if(valor > 0 && !isNaN(valor)) {
            return true;
        } else {
            return false;
        }             
    }

    const valueValidator = (valor) => {
        return valor.replace(",", ".");
    }

    const imcValidator = (peso, altura) => {

        const imc = peso / (altura * altura);

        if(imc < 18.5) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado abaixo do peso.</p>`;
        }

        if(imc > 18.5 && imc < 24.9) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado peso normal</p>`;
        }

        if(imc > 25 && imc < 29.9) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado sobrepeso</p>`;
        }

        if(imc > 30 && imc < 34.9) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado obesidade grau 1</p>`;
        }

        if(imc > 35 && imc < 39.9) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado obesidade grau 2</p>`;
        }

        if(imc > 40) {
            return `<p>IMC: ${imc.toFixed(2)} - Considerado obesidade grau 3</p>`;
        }

    }
    const errorPeso = (valor) => {
        if(validation(valor)) {
            pesoErro.innerHTML = "";
            peso.style.borderColor = "";
            error = false;           
        } else {
            pesoErro.innerHTML = "Insira um número válido."; 
            peso.style.borderColor = "red";
            error = true; 
        }
    }
    const errorAlt = (valor) => {

        if(validation(valor)) {
            alturaErro.innerHTML = ""; 
            altura.style.borderColor = "";
            error = false;           
        } else {
            alturaErro.innerHTML = "Insira um número válido.";
            altura.style.borderColor = "red";
            error = true; 
        }
    }

    form.onsubmit = e => {
        e.preventDefault();

        errorPeso(peso.value);
        errorAlt(altura.value);

        const pesoValue = valueValidator(peso.value);
        const alturaValue = valueValidator(altura.value);        

        if(!error && pesoValue > 0 && alturaValue > 0) {
            result.style.display = "block";
            result.innerHTML = imcValidator(pesoValue, alturaValue);
        } else {
            result.style.display = "none";
        }
    }

    peso.onblur = e => {
        let valor = e.target.value;        
        errorPeso(valor);
    }

    altura.onblur = e => {
        let valor = e.target.value;        
        errorAlt(valor);
    }

})();