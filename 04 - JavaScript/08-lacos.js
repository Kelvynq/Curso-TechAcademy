// FOR

let listaNumero = [5,3,12,9,1];

for(let i=0; i<=listaNumero.length; i++ ){
    console.log(listaNumero[i]);
}

let lista ; //For of
for(let numero of listaNumero){
    lista = numero;
    console.log(lista);
}

// WHILE

const nomes = ['Pedrinho', 'Kiara', 'Beth', 'Rin'];
i=0;
while(i< nomes.length){
   console.log(nomes[i]);
   i++;
}

// DO WHILE

let j=0;
do{
    alert('BEM BEM BEM-VINDO!');
    j++;
}while(j<nomes.length);