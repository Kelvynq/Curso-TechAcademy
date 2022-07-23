import { getPeople } from "./StarsWarsService.js";

async function main(){
    const StarsWarsPeople = await getPeople(1);
    const StarsWarsPeopleFiltered = StarsWarsPeople.filter(person =>{
         return person.gender == 'male';
    }).map((person) =>{
        return { name: person.name, gender: person.gender};
    });

    console.log(StarsWarsPeopleFiltered);
}

main();