// IF ELSE

let nota1= 3;
let nota2 = 2;

function media(nota1,nota2){
    return (nota1+nota2)/2;
}

let resultado = media(nota1,nota2);
console.log(resultado);

if(resultado>=7){
    console.log(`A media é ${resultado}, logo aluno aprovado`);
}else if(resultado<4){
    console.log(`A média é menor que 4, logo reprovado`);
}else{
    console.log(`A média é ${resultado}, logo aluno está na final`);
}

// OPERADOR TERNÁRIO - 3 OPERANDO

let nota3= 1;
let nota4 = 2;

function media(nota3,nota4){
    return (nota3+nota4)/2;
}

let resultado2 = media(nota3,nota4);
console.log(resultado2);

let situacao = resultado2>=6 ? 'Aprovado': 'Reprovado'; //Segundo exemplo
let situacao2 = resultado2<4 && resultado2>2 ? `${resultado2} Média menor que 4, então reprovado`:
                resultado2<2 ? `${resultado2} Nossa!! Vamos estudar,né?`:
console.log(situacao);
console.log(situacao2);

// SWITCH

let opcao = 1;

switch(opcao){
    case 1: console.log('Entrega econômica - em 10 dias úteis'); break;
    case 2: console.log('Entrega padrão - em 7 dias úteis'); break;
    case 3: console.log('Entrega express - em 3 dias úteis'); break;
    default: console.log('Opção inválida');
}










































