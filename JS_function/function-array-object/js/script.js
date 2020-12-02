function newForm() {
  const form = document.querySelector("form");
  const result = document.querySelector("#resultado");

  const data = [];

  const addPesoa = (nome, sobrenome, peso, altura) => {
    data.push({
      nome,
      sobrenome,
      peso,
      altura,
    });
  };

  form.onsubmit = e => {
    e.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    
    addPesoa(nome.value, sobrenome.value, peso.value, altura.value);
    
    result.innerHTML = '';
    
    data.map(pessoa => {      
      result.innerHTML += `
        <p><strong>Nome:</strong> ${pessoa.nome},
        <strong>Sobrenome:</strong> ${pessoa.sobrenome},
        <strong>Peso:</strong> ${pessoa.peso},
        <strong>Altura:</strong> ${pessoa.altura}.</p>
      `;
    })
    console.log(data);
  };
}

newForm();
