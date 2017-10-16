var numeros = [4,2,6,7,3,2,3,6,8];
console.log(numeros.s)


//metodo de ordenacion burbujeo

/*var numeros = [4,2];
2// 1 . guardo en un temporal el numero a pisar

var numTemp = numero [0];
// 2 . piso el 1 er numero

numero [0] = numeros [1];
// 3 . piso el 2do numero con la var temp

numeros [1] = numTemp;
console.log(numeros);
*/


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

console.log("asi es al final: ", numeros);
