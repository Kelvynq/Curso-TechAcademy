'use strict'

class Produto{ //Claasse Pai
    #tipo; //privado
    #valor; //privado
    constructor(tipo,valor){
        this.#validaValor(valor);
        this.#tipo=tipo;
        this.#valor=valor;
    }

    #validaValor(valor){ //validar o valor
        if(typeof(valor) != 'number'){
            console.log('valor inválido');
        }
    }
    getDados(){
        return `
        Tipo: ${this.#tipo}
        Valor: R$${this.#valor}`;
    }
}

class Livro extends Produto{ //Classe filha
    #titulo;
    #numPag;
    constructor(titulo,numPag,valor){
        super('Livro',valor); //atributos da super classe
        this.#titulo = titulo;
        this.#numPag = numPag;
    }

    getDados(){
        //Pegando os atributos da classe pai
        return `
        ${super.getDados()}  
        Título: ${this.#titulo}
        Número de páginas: ${this.#numPag}`;
    }
}

//Quando tem dados em comum 
const x = new Produto('Livreto', 33); //classe pai
console.log(x.getDados());

const y = new Livro('Super magos', 22, 56); //classe filha
console.log(y.getDados());