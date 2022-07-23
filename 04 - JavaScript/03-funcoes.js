//Função

function exibirmensagem(){
    window.alert("Chamando uma mensagem por uma função");
}
exibirmensagem();


function exibirmensagem1(nome){
    alert(`Olá ${nome}! Tudo bem?`);
}
exibirmensagem1('ana');


function mediaAri(a,b){
     let num = (a+b)/2;
     return num;
}
console.log(mediaAri(10,5));


function calcularMilha(){
    let km = document.querySelector('#valorKM').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}