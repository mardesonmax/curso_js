// function Produto (nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: true,
//         configurable: false
//     });
// }

// const produto = new Produto('Camisa', 30, 3);
// console.log(produto);


// const info = `Produto: ${produto.nome} \nR$: ${produto.preco} \nQtd: ${produto.estoque}`
// console.log(info);


// function Produto (nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     let QTD = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         configurable: false,
//         get: () => {
//             return QTD;
//         },
//         set: (value) => {

//             if(isNaN(value)) { 
//                 console.log("O valor deve ser um numero valido!"); 
//                 return;
//             }

//             QTD = value;
//         }
//     });
// }

// const produto = new Produto('Camisa', 30, 3);
// console.log(produto);

// produto.estoque = NaN;
// // produto.estoque = 55;

// console.log(produto.estoque);

const produtos = (nome) => {
    return {
        get nome() {
            return nome
        },
        set nome(value) {

            const regex = /[0-9]/;
            
            if(regex.test(value)) {
                console.log('Nome invalido!');
                return;
            }

            nome = value;
        }        
    }
}

const produto = produtos('Camisa');

produto.nome = 'Novo nome 1';

console.log(produto.nome);