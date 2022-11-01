/* const saludar = function (nombre) {
    return `Hola ${nombre}`
} */

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = ()=> `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'elver1985'
})


const user = getUser();
console.log(user);


 function getUsuarioActivo (nombre) {
    return {
        uid:'ABC123',
        username:nombre
    }
} 

const getUsuarioActivo2 = (nombre)=>({
    uid:'ABC4567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Joaco')
const usuarioActivo2 = getUsuarioActivo2('Elver')
console.log(usuarioActivo)
console.log(usuarioActivo2)