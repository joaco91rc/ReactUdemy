const activo = true;
let mensaje ='';
if (!activo){
    mensaje = 'Activo'
} else {
    mensaje = 'Inactivo'
}

const mensaje2 = (activo)? 'Activo':'Inactivo';
const mensaje3 = (activo) ? 'Ativo' : null;
const mensaje4 = activo && 'Activo' 
console.log(mensaje,mensaje2,mensaje3,mensaje4)