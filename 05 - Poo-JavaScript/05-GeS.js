'use strick'

class Laboratorio{
    #nome; //atributo privado
    #capacidade; //atributo privado

constructor(nome,capacidade){
    this.#nome = nome;
    this.#capacidade = capacidade;
}

getNome(nome){ //recebe
    return this.#nome;
}

setNome(nome){ //da
    this.#nome = nome;
}

getCapacidade(capacidade){ //recebe
    return this.#capacidade;
}

setCapacidade(capacidade){ //da
    this.#capacidade = capacidade;
}
}

const lab = new Laboratorio('Informática', 35);
lab.setNome('Meu novo lab');
lab.setCapacidade(21);
console.log(lab);

