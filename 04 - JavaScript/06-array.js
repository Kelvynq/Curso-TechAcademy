// PARTE I



let cidade = ['Campina Grande', 'Salvador', 'João Pessoa', 'Recife'];

console.log(cidade);
console.log(cidade.length);
console.log(cidade[2]);
console.log(cidade[cidade.length -2]);

cidade[1] = 'Londres'; //Sobrescrevendo
console.log(cidade);

let jogadores = [ //vetores de vetores
    {
        nome: 'Fih',
        posicao: 'Atacante'
    },

    {
        nome: 'Edu',
        posicao: 'Volante'
    }
]
console.log(jogadores);

const palavrachave = 'cinema,futebol,televisao,viagem,boliche'; 
const hobbie = palavrachave.split(','); //Transforma String em array 
console.log(hobbie);

const tipoHobbie = hobbie.toString(); //Transforma Array em String
console.log(tipoHobbie);

const tipoHobbie2 = hobbie.join('|'); //String separada pelo |
console.log(tipoHobbie2);


// PARTE II



const cidades = [];

// PUSH - adiciona no final do vetor

cidades.push('Aldeia da folha', 'Aldeia do som');
console.log(cidades);
cidades.push('Aldeia da areia', 'Aldeia da grama');
console.log(cidades);

// UNSHIfT - adiciona no início do vetor

cidades.unshift('Aldeia do trovão', 'Aldeia ds pedra');
console.log(cidades);

// POP - apaga o último elemento - retorna elemento removido

let cidadeRemovida = cidades.pop();
console.log(cidadeRemovida);
console.log(cidades);

// SHIFT - apaga o primeiro elemento - retorna elemento removido

cidadeRemovida = cidades.shift();
console.log(cidadeRemovida);
console.log(cidades);

// SPLICE - apaga 1 ou mais elementos - utilizando um índice

const indice = cidades.indexOf('Aldeia do som');
console.log('Aldeia do som');
cidades.splice(indice,1);
console.log(cidades);

// CONCAT - contatenação de vetores

const interior = ['Patos', 'Solidade', 'Areia'];
const metropolitana = ['João Pessoa', 'Campina Grande'];
const interiorMetropolitana = interior.concat(metropolitana);
console.log(interiorMetropolitana);

















