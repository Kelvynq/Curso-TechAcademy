import { getPeople } from "./StarsWarsService.js";

async function main(){
    const StarsWarsPeople = await getPeople(1);
    for(let i=0; i<StarsWarsPeople.length; i++){ //Fpr
        console.log(StarsWarsPeople[i].name);
    }
    for(let propPerson in StarsWarsPeople[0]){ //For in
        console.log(StarsWarsPeople[0][propPerson]);
    }
    for(let person of StarsWarsPeople){ //For of
        console.log(person.name);
    }
}

main();