import { getPeople } from "./StarsWarsService.js";

async function main(){
    const StarsWarsPeople = await getPeople(1);
    const StarsWarsPeopleNames = StarsWarsPeople.map((person) => {return person.name});
    console.log(StarsWarsPeopleNames);
}

main();