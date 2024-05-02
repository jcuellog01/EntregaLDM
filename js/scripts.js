"use strict";

function controlarNumero(num){
    return !Number.isNaN(num);
}

function isNumeroTelefono(){
    let num = document.getElementById("telefono").value;

    if(controlarNumero(num)){
        let esLongitudCorrecta = 9;
        if(num.toString().length === esLongitudCorrecta){
            return true;
        }else{
            alert("El numero no tiene 9 cifras");
            return false;
        }
        
    } else {
        alert("El telefono no es un numero");
        return false;
    }
}

function generarAleatorio(min,max){
    return Math.floor((Math.random() * (max - min +1)) + min);
    }


function generarAleatorio(min, max) {

    return Math.floor((Math.random() * (max -min + 1) )+ min);
}

//funciones para pintar img en orden aleatorio

const urls= [

    "https://prestigeandperformancecar.com/wp-content/uploads/Z3-M-Roadster-900x563.jpg",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/06/1994-BMW-850CSI-2-Cropped.jpg",
    "https://i.pinimg.com/originals/66/10/30/66103020a5ee9e5fcf1d9fd370c48590.jpg",
    "https://hips.hearstapps.com/autoweek/assets/s3fs-public/9556668237_22071c7bd3_o.jpg",
    "https://www.motortrend.com/uploads/2022/06/bmw-850i-front-end.png",
    "https://www.carscoops.com/wp-content/uploads/2022/06/1990-BMW-M3-3.jpg",
    "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/11/bmw-m3-e30-1986_4.jpg?tf=3840x",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/12/P90236517_highRes_the-bmw-m3-compact-e.jpg"
]

function pintarImagen(){
    const contenedor = document.getElementById("contenedorimg");
    contenedor.innerHTML =" ";
    let num=0;
    let aleatorio=generarAleatorio(0,urls.length-1);
    
        
    while(num==aleatorio){
        aleatorio=generarAleatorio(0,urls.length-1);
    }
    num=aleatorio;
    let url=urls[aleatorio];
    let image= document.createElement("img");
    
    image.src=url;
    contenedor.appendChild(image);
    texto=contenedor.createElement("h3")

    contenedor.appendChild
}

//Boton index: NuestrosProyectos

const botonTexto = document.getElementById('botonProyectos');

//----------------------------

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
  } else {
    console.error('La geolocalización no es compatible con este navegador.');
  }
  
  function mostrarUbicacion(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
  
    // Convertir las coordenadas a una ciudad usando una API de geocodificación
    fetch('https://api.geocoding.xyz/?lat=' + latitud + '&lng=' + longitud + '&json=1')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
            const ciudad = data.city;
            const pais = data.country;
            const textoElement = document.getElementById('textoPersonalizado');

// Create an h3 element for the city
const cityHeading = document.createElement('h3');
cityHeading.textContent = '¡Bienvenido a nuestra página web desde ' + ciudad + '!';

// Create a p element for the country
const countryParagraph = document.createElement('p');
countryParagraph.textContent = ', ' + pais + '.';

// Append the dynamic elements to the target div
textoElement.appendChild(cityHeading);
textoElement.appendChild(countryParagraph);
  
          // Mostrar el texto personalizado
          textoElement = document.getElementById('textoPersonalizado');
          textoElement.textContent = '¡Bienvenido a nuestra página web desde ' + ciudad + ', ' + pais + '!';
        } else {
          console.error('Error al obtener la información de geocodificación:', data.error);
        }
      })
      .catch(error => console.error('Error al obtener la información de geolocalización:', error));
  }
  
  function mostrarError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error('El usuario ha denegado el permiso para acceder a su ubicación.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.error('La información de ubicación no está disponible.');
        break;
      case error.TIMEOUT:
        console.error('La solicitud de geolocalización ha excedido el tiempo límite.');
        break;
      default:
        console.error('Error desconocido de geolocalización:', error.message);
    }
  }



  // Obtenemos el chiste
function chistesAPI(){
fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(json => {
    printChuck(json.value);
});
}

  // Pinta el chiste
function printChuck(joke) {

  var chuckJokesDiv = document.getElementById("chuckJokes");
  chuckJokesDiv.innerHTML='';
  var paragraph = document.createElement("h4");
  var jokeText = document.createTextNode(joke);
  paragraph.appendChild(jokeText);
  chuckJokesDiv.appendChild(paragraph);
}
