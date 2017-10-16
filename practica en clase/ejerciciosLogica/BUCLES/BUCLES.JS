/*


console.log(1.2.3);
console.log(1);
console.log(2);
console.log(3);


/*si quiero mostrarlo en pantalla hasta 100 seria un choclazo y inservible; 
CON IF TAMBIEN SERIA UN CHOCLAZO

if(x<=100){
	console.log(X); x++
}

if(x<=100){
	console.log(X); x++
}

TAMBIEN SE PUEDE HACER CON WHILE (MIENTRAS) QUE SERIA MAS EFECTIVO PARA NO TENER QUE REPETIRLO MUCHAS VECES*/

/*var x=1;

while (x<=100){
	console.log("x");
	x++;/*postcondicion*}/

/*console.log("sali y el valor de x es:" + x);*/

/* otra forma de escribir esto sin concatenar es con comillas ´´
console.log(´sali y el valor de x es ${x}´);*/

var x=100;

while (x>=1){
	console.log(x);
	x--;/*postcondicion*/
}
console.log("sali y el valor de x es:" + x);