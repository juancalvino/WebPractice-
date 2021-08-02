
let materia = "fisica";

const materias = {
    fisica:["pedro", "pepito", "cofia", "maria"], 
    programacion:["pedro", "cofia", "maria"],
    logica:["pedro", "pepito", "cofia", "maria"],
    quimica:["pedro", "pepito", "cofia", "maria"]
}

let profesor = materias[materia].shift();
let alumnos = obtenerInformacion(materia);
document.write(`El profesor es ${profesor} <br> y los alumnos son ${alumnos}`);


devolverMateriasInscriptas("pepito");
devolverMateriasInscriptas("maria");


function devolverMateriasInscriptas(alumno){
    let cantitadDeMaterias = cantidadDeMateriasAnotadas(alumno);
    document.write(`<br><br> ${alumno} se inscribio a ${cantitadDeMaterias}`);
    materiasAnotadas(alumno);
}

function obtenerInformacion(materia){
    if(materias[materia] !== undefined){
        return materias[materia];
    }
    else{
        throw new Error  ("No existe la materia")
    }
}

function materiasAnotadas(alumno){
    for(let materia in materias){
        if(materias[materia].includes(alumno))
        document.write("<br>" + materia); 
    }
}

function cantidadDeMateriasAnotadas(alumno){
    let cantidad = 0;
    for(let materia in materias){
        if(materias[materia].includes(alumno))
        cantidad++;
    }
    return cantidad;
}
