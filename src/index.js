/* console.log("Hola Mundo!!!")

const nombre = "Joaco";
const apellido = "Alvarez";
//const nombreCompleto= nombre + ' '+ apellido
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto); */

const apiKey= 'XX0apVKh0yY4Yb5GYAUEhe5nAO9dSsva';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
peticion.then(resp => resp.json() )
.then(({data}) => {
    const {url} = data.images.original
    console.log(url)
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})