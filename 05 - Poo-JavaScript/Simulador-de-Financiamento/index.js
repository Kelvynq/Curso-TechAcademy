import {Financiamento} from './financiamento.js'; 


const comCarencia = document.querySelector('#comCarencia'); //selecionando um elemento
const listaSuspensa = document.querySelector('#listaSuspensa'); // selecionando um elemento
const corpoTabela = document.querySelector('#corpoTabela'); //selecionando um elemento
const botaoCarcular = document.querySelector('#botaoCalcular'); //selecionando um elemento
const textoValor = document.querySelector('#textoValor'); //selecionando um elemento
const textoEntrada = document.querySelector('#textoEntrada'); //selecionando um elemento
const textoTaxaJuros = document.querySelector('#textoTaxaJuros'); //selecionando um elemento
const textoPrazo = document.querySelector('#textoPrazo'); //selecionando um elemento

//objeto
//adicionando uma verificação qndo acontece uma ação(qndo muda o estado)
comCarencia.addEventListener('change',function(){
    if(this.ckecked){ //se tiver marcado
        listaSuspensa.removeAttribute('hidden');
    } else { //se não tiver marcado
        listaSuspensa.setAttribute('hidden','hidden'); //atribuir um atributo
    }
}); 

botaoCarcular.addEventListener('click', function(){
    const valor = parseFloat(textoValor.Value);
    const entrada = parseFloat(textoEntrada.Value);
    const taxaJuros = parseFloat(textoTaxaJuros.Value);
    const prazo = parseFloat(textoPrazo.Value);
    let simulacao;
    simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
})
