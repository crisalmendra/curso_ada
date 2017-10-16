
/*ejercicios 1 Cargar de forma automática incremental, un array de números a partir de un largo dado por el usuario.

var numero = prompt("ingrese un numero");
var auto = [];
for (i =0; i < numero; i++){
	auto = i;
	console.log(auto) ;
}*/

/*ejercico 3 Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.

x = [10,24,36,7,98,11,14,20];
var mayor;
for (var i = 0; i < x.length - 1; i++){
	if (x[i] > x [i + 1]){
		mayor = x[i]
	}
}
console.log(mayor);*/

/*ejercicio 3 MEJOR OPCION


x = [10,24,36,7,98,11,14,20,98];

var i;

var mayor = x[0];

var posicion = 0;

for (i = 0; i <= x.length; i++){

	if( x[i] >= mayor){
		if( mayor == x[i]){
			posicion = posicion +1;
		}else{
			posicion = 1;
    		 }
    		mayor = x[i];
	}
}
 console.log("el valor " + mayor + " es el valor maximo del array y se repite :" + posicion);
*/
/*Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*/

x = ["a","l","f","a"];
y = ["a","l","f","a","j","o","r"];
var xl = x.length;
var yl = y.length;
var cont = 0; 
var distinto = false;
var n; //largo vectores
var m; //largo vector
var obs;
var z = ["","","",""];
var l;
var largoZ = -1;

if (x.length == y.length){
	
	for (i=0;i<x.length;i++){
	
		if(x[i] != y [i]){
			distinto = true;
		}
	}

} else{

	if(xl > yl){
		console.log("X es mas largo");
 		n = yl;
 		m = xl;

	}else{
		n = xl;
		m = yl;
		console.log("Y es el mas largo");
	
	}
}

for (i=0; i<n; i++){ //el array mas corto


obs = false;
for (l=0; l<4; l++){
	if (x[i]=z[l]){
		obs=true;
		break;
	}
} 
	if(!obs){
	for (j=0; j<m;j++){ // el array mas largo

		if (x[i] == y[j]){
			cont++;
			largoZ++;
			z[largoZ] = x[i];
			break;
		}
	} 
}

} console.log("cantidad de letras en comun : " + cont );


/*tarea como hago para no volver a contar como una coincidencia las letras repetidas.
armo un array vacio  (match) para ir guardando las coincidencias y antes de guardarlas hay que compar
que no se repita . el resultado es 3*/