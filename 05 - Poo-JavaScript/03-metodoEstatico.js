class Musica{
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo,duracao){
        this.titulo = titulo;
        this.duracao = duracao;
    }

    static converteMinutosEmSegundos(duracao){ //método estático
       const min = Math.floor(duracao/60);
       let seg = duracao % 60;
       if(seg<10 && seg>0){
        seg = `0${duracao%60}`;
       }else if(seg < 10){
           seg = '00';
        }
        return `${min}:${seg}`;
       }
       getDuracao(){
        return this.duracao;
       }
    }

    const musica1 = new Musica('Minha música',190);
    console.log(Musica.converteMinutosEmSegundos(musica1.getDuracao())); //chamando método estáico