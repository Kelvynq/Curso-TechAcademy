function mensagemNaruto(callback){
    setTimeout(() => { //da um tempo para chamar a função
        console.log("Quero ser hokage e vc Sasuke?");
        callback();
    }, 0);
}

function mensagemSasuke(){
    console.log("Mata irmão mata");
}

mensagemNaruto(mensagemSasuke);