// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// contenedor para los resultados
const resultado = document.querySelector('#resultado');



const max = new Date().getFullYear();
const min = max - 10;


const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos

    // LLena las opciones de anos
    llenarSelect();


})

//Event listener para los formularios de busqueda
// Toma el valor de marca
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
// Toma el valor de year
year.addEventListener('change', (e) =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
// Toma el valor de minimo
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})
// Toma el valor de maximo
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})
// Toma el valor de puertas
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
})
// Toma el valor de transimisions
transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})
// Toma el valor de color
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})







// funciones
function mostrarAutos(autos){

    limpiarHTML();

    autos.forEach(auto => {
        const {marca,modelo, year, puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


function llenarSelect(){
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto () {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    mostrarAutos(resultado);
}

function filtrarMarca (auto) {
    const {marca} = datosBusqueda
    if (marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear (auto){
    const {year} =  datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto
}

function filtrarMinimo (auto){
    const {minimo} =  datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} =  datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto
}

function filtrarPuertas (auto){
    const {puertas} = datosBusqueda;
    if (puertas){
        return auto.puertas == puertas;
    }
    return auto
}

function filtrarTransmision (auto){
    const {transmision} = datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto 
}

function filtrarColor (auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto
}