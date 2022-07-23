import fs from 'fs';

let alunos;

fs.readFile('./alunos.json', (erro,dados) =>{ //ler arquivos usando callback
    if(erro){ //se houver erro
        console.error(erro);
        return;
    }
    alunos = JSON.parse(dados); //pegando os dados do arquivo json
    console.log('alunos:', alunos); 
});

