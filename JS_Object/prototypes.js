function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
} 

Produto.prototype.desconto = function(percent) {
    this.desc = (this.preco * percent / 100);
}

const produto = new Produto('Mouse', 999);

console.log(produto);

