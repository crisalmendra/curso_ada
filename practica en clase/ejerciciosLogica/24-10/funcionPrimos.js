// si es primo no es par  %2 !==0; excepto el 2



function primos(numero){
	var modulo = 0;
	for(var i = 2; i<numero; i++){
		modulo = numero %i;
		if(modulo == 0){
		return false;
	}
}
	return true; 
}


console.log(primos(14));



/* otra opcion incompleta

function primos(n){
	if (n===1){
	console.log("el numero ${n} no es primo");
	return false;
	}

	else if(n === 2){
	console.log("el numero ${n} si es primo");
	return true;
	}
	else{
	for(var x=n; n <; x--){
	if (n % x === 0){
	console.log("el numero ${n} no es primo");
	return false;
	}	}
	}
	}
}

*/

/*otras forma de resolverlo
function primos(N){
	for(var i = N-1; i>1; i--){
		var x = N % i; 
		if(x == 0){
			return false;
		}
	}
	return true;
} console.log(primos(13));

*/

/* idem anterior pero con while

function primos(N){
var i = 2;
while((i>1) && (i<N)){
	
	var x = N % i;
	if(x == 0){
	 return false;
	}
i++;
}
return true;
}
*/

/* idem anterior pero con do while

function primos(N){
	do{
	var x = N % i;
	if ( x == 0){
	    return false;
	}
	i++;

}while ((i>1) && (i<N))
	
 return true;

}

var numero = 13;
console.log(primos(numero));*/
