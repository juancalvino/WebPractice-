const sendButotn = document.getElementById("formulario__enviar");

sendButotn.addEventListener("click", (e) =>{
    let resultado = parseInt(document.getElementById('formulario__notas').value);
    try{
        if(resultado >= 1 && resultado <= 10){
            console.log(resultado);
        } 
        else{
            shrow new Error();
       }
    }
    catch(e){
        console.log("arstsaaara");
    }
});

