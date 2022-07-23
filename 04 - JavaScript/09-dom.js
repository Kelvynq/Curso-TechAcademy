const listaTarefas = document.querySelector('#listaTarefas') //pegando o elemento ul listaTarefas
const caixaTexto = document.querySelector('#caixaDeTexto'); // pegando o elemento caixaTexto
const botaoAdicionar = document.querySelector('#botaoAdicionar'); //pegando o elemento botaoAdicionar
const listaSuspensa = document.querySelector('#listaSuspensa'); 

// Listener - adiciona item ou tarefa na lista
botaoAdicionar.addEventListener('click', function(){ //Manipulador de eventos
        const textoDaTarefa = caixaTexto.value;//pega o que foi digitado na caixa de texto 
        caixaTexto.value = ''; //limpa caixa de texto
        listaTarefas.appendChild(adicionaTarefa(textoDaTarefa)); //adiciona cada filho
        ocultaExibe();
        caixaTexto.focus();
});  

function adicionaTarefa(textoDaTarefa){ //criando elementos que serão inseridos na lista
      const elementoLI = document.createElement('li'); //criando li
      const elementoSPAN = document.createElement('span'); //criando span

      elementoSPAN.setAttribute('id','tarefa');
      elementoSPAN.textContent = textoDaTarefa;
      

      elementoLI.className = 'naoRealizada';
      elementoLI.appendChild(elementoSPAN);
      elementoLI.appendChild(adicionaBotaoRemover());



      // Listener - sempre que um item da lista for clicado, seu estado será alterado
      elementoSPAN.addEventListener('click', function(){
        if(this.id === 'tarefa'){
               if(this.parentNode.className === 'naoRealizada'){
                 this.parentNode.className = 'realizada' //mudando a classe
               }else{
                    this.parentNode.className = 'naoRealizada' //mudando a classe
                 }
               }
      })
      return elementoLI;
}

function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.className = 'remover'; //estilizar css
    // Listener - botão remover clicado, o filho sera removido(item da lista)
    botaoRemover.addEventListener('click', function(){
               listaTarefas.removeChild(this.parentNode); //remove um filho
               ocultaExibe();
    });

    return botaoRemover;
}

//exibe e oculta as opções de marcar e desmarcar
function ocultaExibe(){
    const elementoSPAN = document.querySelector('#tarefa');
    if(elementoSPAN === null){
        listaSuspensa.setAttribute('hidden', 'hidden'); 
    }else{
        listaSuspensa.removeAttribute('hidden');
    }
}

//Marca, desmarca as tarefas e exclui 
listaSuspensa.addEventListener('change', function(){ //chance = mudança
      if(listaSuspensa.selectedIndex ===1 || listaSuspensa.selectedIndex ===2){
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event('click'));
        }
      } else if (listaSuspensa.selectedIndex ===3){
        const vetorBotoes = listaTarefas.querySelectorAll('.remover');
        for(botao of vetorBotoes){
            botao.dispatchEvent(new Event('click'));
        }
    }
});