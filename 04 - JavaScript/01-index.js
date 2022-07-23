alert("Seja bem-vindo");
document.write("Essa é nossa primeira aula");
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades'; //Altera conteúdo

/*
const nome = prompt('Qual é o seu nome?'); //Pergunta e armazena
alert('Que bom ver você ${nome} !\n Vamos comecar?');

//Apresenta uma mesagem e esconde o formulário de login
function bemVindo9(){
       const nome = document.querySelector('#nomeUsuario').value;
       alert('ola ${nome}');
       document.getElementById('formularioLogin').style.display = 'none';
}
*/

//Muda a cor do background 
function mudaCor(){
    const menu = document.querySelector('#cores');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}