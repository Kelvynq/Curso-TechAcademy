import { getPeople } from "./StarsWarsService.js";

async function main(){
    const StarsWarsPeople = await getPeople(1);
    const totalHeight = StarsWarsPeople.reduce((total,person) =>{
         total += Number(person.height);

         return total;
    },0);

    console.log('Média de altura:', totalHeight / StarsWarsPeople.length);
}

main();