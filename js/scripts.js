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
  
    
    '',
    './img/coche1.jpg',
    './img/coche2.jpg',
    './img/coche3.jpg',
    './img/coche4.jpg',
    './img/coche5.jpg',

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


  //pintar tu nombre
    const textInput = document.getElementById('textInput');
    const displayArea = document.getElementById('displayArea');
    
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const enteredText = "Bienvenido a Radikal MotorWorks, " + textInput.value + "!";
        displayArea.textContent = enteredText;
        textInput.value = "";
      }
    });
    
    const form = document.getElementById('myForm'); 
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const enteredText = textInput.value;
      displayArea.textContent = enteredText;
      textInput.value = "";
    });
