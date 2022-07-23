export class Parcela{
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero,valor,juros,amortizacao,saldo){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }

    getDadosFormatados(){
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.tolocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#amortizacao.tolocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#juros.tolocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#saldo.tolocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        return dados;
    }
}