import { getHeroeById } from "./08-import-exports";

/* const promesa = new Promise ((resolve,reject)=>{
    setTimeout(()=> {
        const p1 = getHeroeById(2);
        resolve(p1)
    },2000)
})
promesa.then((heroe)=>{
    console.log('Heroe:',heroe)
})
.catch(error => console.warn(error)) */

const getHeoresByIdAsync = (id)=>{
    return new  Promise ((resolve,reject)=>{
        setTimeout(()=> {
            const p1 = getHeroeById(id);
            if (p1){
            resolve(p1)
            } else {
                reject('No se pudo encontrar el Heroe')
            }
        },2000)
})
}

getHeoresByIdAsync(3)
.then(heroe => console.log('Heroe:', heroe))
.catch(error => console.log(error))