class Produto{
    descricao;
    largura;
    altura;
    profundidade;
    valor;
    constructor(descricao,largura,altura,profundidade,valor){
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }

    volumeProduto(){ //método calcula volume
        return this.largura*this.altura*this.profundidade;
    }
    parcelaValor(parcela){ //método com parâmetro calcula valor da parcela
           return this.valor/parcela;
    }
}

const carrinho = new Produto('Carrinho super veloz', 25, 10, 5, 30);
console.log(carrinho.volumeProduto());
console.log(carrinho.parcelaValor(2));