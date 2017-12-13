
//esta funcion devuelve algo

function fibonacci(mes){
	var n1= 0;
	var n2= 1;
	var n3;

	for (var i =0; i<mes; i++){
		n3=n1+n2;
		n1=n2;
		n2=n3;
		console.log(n3);
	}
}

// en este caso no devuelve, solo cuando es invocada

function fibonacci(mes){
	var n1= 0;
	var n2= 1;
	var n3;

	for (var i =0; i<mes; i++){
		n3=n1+n2; /* X= fibonacci(mes-1)+fibonacci(mes-2)*/
		n1=n2;
		n2=n3;
		
	}
	return n3;
}

console.log(fibonacci(4));

