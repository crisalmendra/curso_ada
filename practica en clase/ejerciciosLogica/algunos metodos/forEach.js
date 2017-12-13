var planetas = ["mercurio",
"venus",
"tierra",
"marte",
"jupiter",
"saturno",
"urano",
"neptuno",
"pluton"];//9 elementos


//forEach siempre recibe una funcion y recorre todo el array!
planetas.forEach(function()){
	console.log("uso el for Each");
});


//planeta es un parametro de dentro del array 
planetas.forEach(function(planeta)){
	console.log(planeta);
});

/*for (var i=0; i< planetas.lenght; i++){
	console.log(planetas[i]);
};

 // lo mismo que lo anterior
var funcion = function(planeta){
	console.log(planeta);
};

planetas.forEach(funcion);
*/


//callback se llama un metodo dentro de la funcion
planetas.forEach(function(planeta,indice,array) => {
	console.log ("el planeta es " + planeta + " y esta ubicado en" + indice + " " + array);
});


planetas.forEach(function(e,i,array) => {//puede recibir hasta 3 parametros => elemento del array, indice, array
	console.log("El planeta es " + e + "y esta ubicado en  " + i + " " + array)
});

