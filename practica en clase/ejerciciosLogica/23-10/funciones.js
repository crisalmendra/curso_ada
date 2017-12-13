var nombre = "Pancho";
console.log ("hola" + nombre + "como estas?");
console.log (Hola ${nombre});


// funcion anonima

function (){

}

//saludo (no me devuelve si no la invoco)

function saludo(){
	console.log(´Hola´);
}

// invoco

saludo();

//me devuelve 

function saludo(){
	return´Hola´;
}
//me guardo el valor de la funcion en una variable:
var valorSaludo = saludo();
console.log(valorSaludo);