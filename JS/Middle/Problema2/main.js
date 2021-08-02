const alumnos = [

    {
        nombre: "Juan",
        email: "juan.calvion@gmail.com",
        materia: "Matematica Discreta"    
    },

    {
        nombre: "Mauro",
        email: "juan.calvion@gmail.com",
        materia: "Matematica Discreta"    
    },

    {
        nombre: "Juan",
        email: "juan.calvion@gmail.com",
        materia: "Matematica Discreta"    
    },

    {
        nombre: "Juan",
        email: "juan.calvion@gmail.com",
        materia: "Matematica Discreta"    
    }

];

const boton = document.querySelector(".btn-confirmar");
const gridContainer = document.querySelector(".grid-container");  

for (alumno of alumnos){
    let nombre = alumno ["nombre"];
    let email = alumno ["email"];
    let materia = alumno ["materia"];
    
    gridContainer.innerHTML += ingresarHTML(nombre,email,materia);
}


boton.addEventListener("click", (e) => {
    if (confirm("Quiere confirmar las mesas?")){
        confirmarMesas();
        document.body.removeChild(boton);
        }
     }
    
);

function ingresarHTML(nombre, email, materia) {
    return `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email"> ${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select name="" id="" class="semana-elegida">
            <option value="semana 1">semana 1</option>
            <option value="semana 2">Semana 2</option>
            <option value="semana 3">Semana 3</option>
            <option value="semana 4">Semana 4</option>
        </select>
    </div> 
`;
}


function confirmarMesas(){
    let elementos = document.querySelectorAll(".semana");
    let semanaElegidas = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML += semanaElegidas[elemento].value;
    }
}


