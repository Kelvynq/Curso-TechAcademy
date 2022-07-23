let nome = 'Ana';
let idade = 20;
let conc = nome + ' ' + idade + 'anos';

conc = `${nome}, ${idade} anos`;

console.log(conc);
console.log(conc.length); //Quantidade de String
console.log(conc.toUpperCase()); //String em maiúsculo
console.log(conc.toLowerCase()); //String em minúsculo

let localizacao = 'Campina Grande - PB';
console.log(localizacao.substring(17,19)); //Uma parte do string

let estado = localizacao.substring(localizacao.length-2);
console.log(estado); //Outra forma de substring

const frase = 'Minha cor é: Azul';
const indice = frase.indexOf(':');

const cor = frase.substring(indice + 2);
console.log(cor); //Substring por índice


let convit = 'A festa ocorrerar no primeiro dia do mês';
console.log(convit);
let novoconvit = convit.replaceAll('primeiro','segundo'); //Troca a string
console.log(novoconvit);






