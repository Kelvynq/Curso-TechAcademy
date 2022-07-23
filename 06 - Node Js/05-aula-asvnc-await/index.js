import fetch from 'node-fetch';

/* function main(){
    console.log('main()');
    const user = 'kelvynq';
    const apiURL = 'https://api.github.com';
    fetch(`${apiURL}/users/${user}`)
    .then((response) =>{
        return response.json(); //transformando em json
    }).then((user) => {
        console.log(user.name);
    })
    } */

    //UTILIZANDO O ASVNC/AWAIT

    async function main(){
        const user = 'kelvynq';
        const apiURL = 'https://api.github.com';
        const response = await fetch(`${apiURL}/users/${user}`);
        const githubUser = await response.json();
        console.log(githubUser);
    }

main();