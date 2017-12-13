/*var aire = ["libra","acuario","geminis"];
var fuego = ["aries","leo","sagitario"];
var agua = ["cancer","escorpio","piscis"];
var tierra = ["capricornio","tauro","virgo"];
*/

//matriz 

Signos = [[],[],[],[]];


//para ir cargando la matriz
Signos[0,0] = "capricornio";

/* para imprimir los datos
console.log(datos[0],[0]);*/

var i, j;

for (i=0; i<signos.lenght;i++){
	for(j=0; j<signos[i].length; i++){
		console.log(signos[i][j]);
	}
}

