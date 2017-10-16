/*
var numeros = [6,5,3,1,8,7,2,4];

console.log("asi es al principio: ", numeros);
for (var vuelta = 0; vuelta < numeros.length; vuelta++){
	for (var j = 0; j< numeros.length-vuelta; j++){
		//si el numero es mayor a su siguiente => intercambio!
		if (numeros[j]>numeros[j+1]){
			var temp = numeros [j];
			numeros [j] = numeros [j+1];
			numeros [j+1] = temp; 
		}
	}

}

console.log("asi es al final: ", numeros);*/


//Cuando los numeros estan ordenados es cuando no vuelve a entrar al if (creo una variable swap o isdesordnada)


var numeros = [6,5,3,1,8,7,2,4];
var isdesordenado = true;

console.log("asi es al principio: ", numeros);

for (var vuelta = 0; vuelta < numeros.length && isdesordenado; vuelta++){
	isdesordenado = false;
	for (var j = 0; j< numeros.length-vuelta; j++){
		//si el numero es mayor a su siguiente => intercambio!
		if (numeros[j]>numeros[j+1]){
			var temp = numeros [j];
			numeros [j] = numeros [j+1];
			numeros [j+1] = temp; 
			isdesordenado = true;
		}
	}

}