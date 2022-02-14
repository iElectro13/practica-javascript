const lista = document.getElementById('lista') //Guarda el elemento con id 'lista' en la constante 'lista'

//Trae los datos de la api
async function traerDatos(direccion){
    const respuesta = await fetch(direccion)
    const datos = await respuesta.json()
    return datos
}


//Pinta la lista de paises
async function traerPaises(){
    const paises = await traerDatos('https://disease.sh/v3/covid-19/countries')

    paises.forEach(pais => {
        //Dentro de este bloque se ejecuta una función por cada país dentro de paises
        lista.innerHTML += `<li>${pais.country} ${pais.cases} ${pais.deaths}</li>`
    })
}


traerPaises()

/*
Paso 1:
Determinar con qué elemento quiero interactuar y lo guardo en una variable o constante

Paso 2:
Traer los datos.

Paso 3:
Pintar esos datos, con el método correspondiente.
*/