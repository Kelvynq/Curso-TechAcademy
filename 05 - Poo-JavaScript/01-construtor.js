'use strict';

class Produto{
    constructor(){ //sem parâmetro
        this.tipo = 'Produto X';
    }
}
const prod = new Produto();
console.log(prod);

class Filme{
    static PEQUENO = 7; //variável estática
    static MEDIA = 10; //variável estática
    static GRANDE = 15; //variável estática
    filme;
    ano;
    tamanho;
    constructor(filme,ano,tamanho){ //com parâmetro
        this.filme = filme; //atributo e parâmetro
        this.ano = ano; //atributo e parâmetro
        this.tamanho = tamanho; //atributo e parâmetro
    }
}
let meuFilme = new Filme('Super filme', 1998, Filme.MEDIA);
console.log(meuFilme);
console.log(meuFilme.filme);

class Livro{
    tamanho
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

let meuLivro = new Livro(Filme.GRANDE); //Chama variável estática de Filme
console.log(meuLivro);


