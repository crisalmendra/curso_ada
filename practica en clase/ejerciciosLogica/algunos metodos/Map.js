// metodo MAP (crea un nuevo array sin tocar el array original), recibe como parametro una funcion (que puede o no recibir parametros)

var numeros = [1,2,3,4,5,6,7];

var numerosMultiplicados = numeros.map(function(num){
		return num * 2;

		});


console.log("array original: " + numeros);
console.log("array x 2: " + numerosMultiplicados);

//Crear un array del 1 al 1000
// Crear un nuevo array que me devuelva cada uno de los elementos * por 10

var myArray = [];
for (var i = 0; i<=1000; i++){
    myArray[i] =  i;
}

console.log(myArray);

var nuevoArray = myArray.map(function(e){
	return e + 10;
})

console.log("array original: " + myArray);
console.log("array x 2: " + nuevoArray);


//crear un array y crear un nuevo array con uppercase

var frutas = [sandia, mora, uva, naranja];

var frutasMay = frutas.map(function())