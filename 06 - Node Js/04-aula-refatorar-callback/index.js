function mensagemNaruto(){
    const promiseMensagemGabriel = new Promise((resolve,rejct) =>{ //recebe dois métodos
    setTimeout(() => { //da um tempo para chamar a função
        console.log("Quero ser hokage e vc Sasuke?");
        resolve();
    }, 0);
});
    return promiseMensagemGabriel;
}
function mensagemSasuke(){
    console.log("Mata irmão mata");
}
mensagemNaruto().then(mensagemSasuke);