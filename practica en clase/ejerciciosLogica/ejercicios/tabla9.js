/* solucion con for



var total= 0;

for (n=1; n<=10; n++){
	total=n*9;
	console.log ( "9 x " + n + " = " + total);
}*/


/* solucion con while


var i = 1;
var a = 0;
var n = 10;

while(i<=n){
	a = 9* i;
	console.log("9 X " + i + "= " + a);
	i++;
}
*/



/*solucion con do while*/

var i = 1;
var total= 0;

do{
	total = 9*i;
	i = i + 1;
}
while (i<=10);

