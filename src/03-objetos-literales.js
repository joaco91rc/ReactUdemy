const persona = {
    nombre :'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 656328,
        lat: 1230.25,
        long: 2135.3,
    }

}

const persona2= {...persona}
persona2.nombre= 'Peter'
console.log(persona);
console.log(persona2);