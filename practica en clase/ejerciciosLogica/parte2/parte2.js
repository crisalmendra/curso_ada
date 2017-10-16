/*var canje=1000;
var puntos=500;
premium= true;
var pesos;

if (puntos>=canje){
	console.log("se lleva su producto");
}
else if (puntos>=canje*0.5 && premium==false){
	pesos=(canje-puntos)/3;
	console.log("usted podra completar su canje con $"+pesos+".-");
}
else if (puntos>=canje*0.5 && primium==true){
	pesos=(canje-puntos)/5;
	console.log("usted podra completar su canje con $"+pesos+".-");
}
else {console.log("sus puntos no le alcanzan, lo sentimos :(")}

*/

////////////////////////////////////////////////////////

var canje=1000;
var puntos=500;
premium= true;
var pesos;
var valorPesos;
var ptosFaltantes;


if(puntos>=canje){
	console.log("se lleva su producto");
}
else{
	if (premium==true){
	valorPesos=1/5;
}	
	else{valorPesos=1/3;
}
	if(puntos>=0.5*canje){
		ptosFaltantes=(canje-puntos);
		pesos= valorPesos*ptosFaltantes;
	}
	else{"no puede canjearlo"}
}

