import  heroes ,{owners}  from "./data/heroes";
console.log(owners);

/* const getHeroesById = (id) =>{
    return heroes.find ((heroe)=>{
        if (heroe.id === id) {
            return true
        }
        else {
        return false
            }
    })
} */

export const getHeroeById = (id)=>{
    return heroes.find((heroe)=> heroe.id ===id)
}

console.log(getHeroeById(2))

const getHeroesByOwner = (owner) => heroes.filter ((heroe)=> heroe.owner = owner)

console.log(getHeroesByOwner('DC'))