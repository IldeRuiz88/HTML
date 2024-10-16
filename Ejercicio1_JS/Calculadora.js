
const n1 = parseFloat(prompt('Ingrese el 1er numero'));
const n2 = parseFloat(prompt('Ingrese el 2do numero'));
const operacion = (prompt('Ingrese la operación deseada (+)(-)(*)(/)'));

function Calculadora(n1, n2, operacion){
    switch(operacion){
        case'+':
            return (n1 + n2);
        case'-':
            return n1 - n2;
        case'*':
            return n1 * n2;
        case'/':
            if (n2 == 0){
            console.log("No se puede dividir");
            }else{
            return n1/n2;
            }
        default:
            console.log("Ingrese una opcion valida");
    }
}

if (isNaN(n1) || isNaN(n2)) {
    console.log("Ingrese un número válido");
  } else {
    const result = Calculadora(n1, n2, operacion);
    console.log("El resultado es:", result);
  }