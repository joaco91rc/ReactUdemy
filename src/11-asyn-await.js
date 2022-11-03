

const getImagenPromesa = () => new Promise (resolve => resolve('https://www.racingclub.com.ar'))
getImagenPromesa().then(console.log)

const getImagen = async ()=>{
    try {
        const apiKey= 'XX0apVKh0yY4Yb5GYAUEhe5nAO9dSsva';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()
        const url = data.images.original;
        const img = document.createElement('img');
        img.src =url;
        document.body.append(img)
    } catch (error) {
        console.warn(error)
    }
    
   
    
}

getImagen()

/* const apiKey= 'XX0apVKh0yY4Yb5GYAUEhe5nAO9dSsva';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
peticion.then(resp => resp.json() )
.then(({data}) => {
    const {url} = data.images.original
    console.log(url)
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

})
    
  

.catch(console.warn) */