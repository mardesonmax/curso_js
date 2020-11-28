(_=> {
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'section', texto: 'Frase 3'},
        {tag: 'footer', texto: 'Frase 4'}
    ];
    
    const container = document.querySelector('.container');
    
    const div = document.createElement('div'); 

    //Map
    elementos.map(element => {
        const tagCreat = document.createElement(element.tag);
        const textCreat = document.createTextNode(element.texto)

        tagCreat.appendChild(textCreat);

        div.appendChild(tagCreat);
    });

    /*
    //For classico
    for(let x=0; x < elementos.length; x++) {
       
        const tagCreat = document.createElement(elementos[x].tag);
        const textCreat = document.createTextNode(elementos[x].texto)

        tagCreat.appendChild(textCreat);

        div.appendChild(tagCreat);
    }
    */
    
    /*
    //For of
    for(let value of elementos) {
        
        const tagCreat = document.createElement(value.tag);
        const textCreat = document.createTextNode(value.texto)
    
        tagCreat.appendChild(textCreat);
    
        div.appendChild(tagCreat);
    }
    */

    /*
    //For in
    for(let i in elementos) {
        
        const tagCreat = document.createElement(elementos[i].tag);
        const textCreat = document.createTextNode(elementos[i].texto)

        tagCreat.appendChild(textCreat);

        div.appendChild(tagCreat);
    }
    */

    container.appendChild(div);
})();