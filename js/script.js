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

//funciones para pintar imagenes en orden aleatorio

const urls= [

    "https://prestigeandperformancecar.com/wp-content/uploads/Z3-M-Roadster-900x563.jpg",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/06/1994-BMW-850CSI-2-Cropped.jpg",
    "https://i.pinimg.com/originals/66/10/30/66103020a5ee9e5fcf1d9fd370c48590.jpg",
    "https://hips.hearstapps.com/autoweek/assets/s3fs-public/9556668237_22071c7bd3_o.jpg",
    "https://www.motortrend.com/uploads/2022/06/bmw-850i-front-end.png",
    "https://www.carscoops.com/wp-content/uploads/2022/06/1990-BMW-M3-3.jpg",
    "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/11/bmw-m3-e30-1986_4.jpg?tf=3840x",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/12/P90236517_highRes_the-bmw-m3-compact-e.jpg"
];

function pintarImagen(){
    const contenedor = document.getElementById("contenedorImagenes");
    contenedor.innerHTML =" ";

    let url=urls[generarAleatorio(0,urls.length-1)];
    let image= document.createElement("img");
    image.src=url;
    image.width=200;
    contenedor.appendChild(image);

}


