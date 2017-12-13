// ejercicio 1



function potencia(base, exponente){
	var resultado = 1;
//0<0 no>no entra -> muestro resultado

	for (i=0; i<exponente; i++){
	resultado = exponente*base;
	}
	return resultado;
}

var operacion = potencia (4,0);
console.log(operacion);// resultado indefinido