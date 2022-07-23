import {CupomDesconto} from './07-composicao2.js'

'use strict';

class Cliente{ //classe cliente
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome){
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios(){
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGastos(valor){
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new Cliente('Pedro'); //composição quando compoe
clienteNovo.setGastos(2000); //composição
clienteNovo.setGastos(11000); //composição
clienteNovo.getBeneficios(); //composição
console.log(clienteNovo);