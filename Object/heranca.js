function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.desconto = function(valor) {
    this.valor -= valor;
}

Produto.prototype.acrecimo = function(valor) {
    this.valor += valor;
}

//Herança 
function Camiseta(nome, valor, cor) {
    Produto.call(this, nome, valor);
    this.cor = cor;
}

//Definindo prototype
Camiseta.prototype = Object.create(Produto.prototype); 
//Definindo prorotype create
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen', 11);
const camiseta = new Camiseta('Regata', 17.50, 'Preta');

// camiseta.acrecimo(10);
console.log(produto);
console.log(camiseta);