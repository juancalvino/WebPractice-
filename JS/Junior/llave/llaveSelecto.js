

const contenedoor = document.querySelector(".flex-container");
crearBloquesRandom(20);


function crearBloquesRandom(cantidadDProductos){
    
    let bloqueEntero = document.createDocumentFragment();
    
    for(let i=0; i<cantidadDProductos; i++){
        let div = document.createElement("DIV");
        let llave = bloqueRandom(i+1);
        div. addEventListener("click", () => {
            document.querySelector(".key-data").value = cambiarValor();
        });
        bloqueEntero.appendChild(div);
        div.classList.add(`item-${i+1}`, `flex-item`);
        div.innerHTML += llave;
        div.tabIndex = (i+1);
    }
    
    contenedoor.appendChild(bloqueEntero);
    
}

function cambiarValor(){
    return  document.activeElement.children[2].id;
}


function bloqueRandom(numeroDeLLave){
    let modeloRandom = Math.round(Math.random()*Math.pow(10,10));
    let precioRandom = Math.round(Math.random()*10)+30;
    
    let llaveRandom = crearLlave(`Llave ${numeroDeLLave}`,` ${modeloRandom}`, `${precioRandom}`);
    let bloqueRandom = llaveRandom[0] + llaveRandom[1] + llaveRandom[2] + llaveRandom[3];
    
    return bloqueRandom;
}


function crearLlave(nombre,modelo, precio){
    img = '<img class= "llave-img" src= "llaveantigua.jpg">'
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id=${modelo}>Modelo ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return [img, nombre, modelo, precio];
}

