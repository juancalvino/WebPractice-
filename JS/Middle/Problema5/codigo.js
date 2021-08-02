const materiasHTML = document.querySelector(".materias");

const materiasConNota = [
    {
        nombre: "Fisica I",
        nota: 7
    },
    {
        nombre: "Calculo III ",
        nota: 8
    },
    {
        nombre: "Base de datos III",
        nota: 9
    },
    {
        nombre: "Matematicas deiscretas II",
        nota: 7
    },
    {
        nombre: "Programacion IV", 
        nota: 8
    }

] 


const obtenerMateria = (id) => {
    return new Promise((res,rej)=>
         {
            materia = materiasConNota[id];
            
            if (materia == undefined) 
                rej("La materia no existe")
        
            setTimeout( ()=>{res(materia)}, Math.random()*400);
         }
        )
}


const devolverMaterias = async() => {
    for(let i=0; i<materiasConNota.length; i++){
        let materia = await obtenerMateria(i)
        console.log(materia);

        let newHTMLCode = 
            `<div class="materia">
                <div class="nombre">${materia.nombre}</div>
                <div class="nota">${materia.nota}</div>
            </div>`;
        materiasHTML.innerHTML += newHTMLCode;        
    }
}


devolverMaterias();