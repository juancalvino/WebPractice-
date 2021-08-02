'use strict';

const nombre = document.getElementById("nombre");
const mail  = document.getElementById("mail");
const materiaAdeudada = document.getElementById("materiaAdeudada");
const bottonEnviar = document.getElementById("btn-enviar");
const resultado  = document.querySelector(".resultado");


bottonEnviar.addEventListener("click",(event) => {
    event.stopPropagation();
    event.preventDefault();
    validarCampos();

} ) ;

const validarCampos =() =>{
    
    if (nombre.value.length <5) {
        resultado.classList.add("red");
        resultado.innerHTML = "El nombre no puede contener menos de 5 letras";    
    }
    else if (nombre.value.length >40){
        resultado.classList.add("red");
        resultado.innerHTML = "El nombre no puede contener menos de 5 letras";    
    }
    else {
        resultado.classList.remove("red");
        resultado.classList.add("green");
        resultado.innerHTML = "Solicitud enviada correctamente";    
    }

}