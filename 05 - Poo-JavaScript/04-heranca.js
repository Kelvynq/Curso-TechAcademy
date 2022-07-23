'use strict'

class Produto{ //Claasse Pai
    tipo;
    constructor(tipo){
        this.tipo=tipo;
    }
    getDados(){
        return `Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto{ //Classe filha
    titulo;
    numPag;
    constructor(tipo,titulo,numPag){
        super('Livro'); //atributos da super classe
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(this.getDados());
    }
    exibeDadosLivros(){
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag} páginas`);
    }
}


const prod = new Produto('bolinha de sabão');
console.log(prod);

const liv = new Livro('Produto','Harry Potter locao', 358);
liv.exibeDadosLivros();