//Objeto

let titulo = 'Harry Potter';
const numPag = 500;

//Criando objeto
const livro = {
    titulo: 'Harry Potter',
    numPag: 500
};

//Alterando item do objeto
livro.numPag = 475;
console.log(livro.numPag);

livro.editora = 'Letrinhas';
console.log(livro);


const pessoa = {
    primeiroNome: 'Feh',
    sobrenome: 'Silvinha',
    endereco: {
        rua: 'Vem vem',
        numero: 185
    },
    nomeCompleto: function(){
       return this.primeiroNome + ' ' + this.sobrenome;
    },
};

console.log(pessoa.primeiroNome);
console.log(pessoa.endereco.rua);
console.log(pessoa.nomeCompleto());

