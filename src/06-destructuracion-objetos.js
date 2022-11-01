const persona = {
    nombre: 'Tony',
    edad:45,
    clave: 'IronMan',
    rango:'Soldado'
}

const {nombre:nombre2, edad,clave} = persona;

console.log(nombre2)
console.log(edad)
console.log(clave)

const useContext = ({nombre,edad,rango='capitan',clave})=>{

    
     //console.log(edad,clave,nombre)
     return {
        nombreClave:clave,
        anios: edad,
        latlng:{
            lat:14.123,
            lng:-10.253,
        }
     }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave,anios,latlng:{lat,lng}} =useContext(persona)

console.log(nombreClave,anios);
console.log(lat,lng);