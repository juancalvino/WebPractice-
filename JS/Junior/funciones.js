
let operacion = prompt("Que operaciok queres realizar? \n 1:suma, 2:resta, 3:dividicion, 4:multiplicacion");

let num1 = parseInt(prompt("primer numero"));
let num2 = parseInt(prompt("segundo numero"));
let resultado = realizar(operacion, num1, num2);

alert (`tu resultado es ${resultado}`);



class Calculadora{

    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2); 
    }

    restar(num1,num2){
        return parseInt(num1) - parseInt(num2); 
    }

    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2); 
    }

    multiplilcar(num1,num2){
        return parseInt(num1) * parseInt(num2); 
    }

}

function realizar(opcion, num1, num2){
    
    const calculadora = new Calculadora;
    let resultado;

    if(opcion == 1){
        resultado = calculadora.sumar(num1,num2);
    }
    else if(opcion == 2){
        resultado = calculadora.restar(num1,num2);
    }
    else if(opcion == 3){
        resultado = calculadora.dividir(num1,num2);
    }
    else if(opcion == 4){
        resultado = calculadora.multiplicar(num1,num2);
    }
    else{
        throw new Error ("La opcion indicada no existe");
    }

    return resultado;
}
