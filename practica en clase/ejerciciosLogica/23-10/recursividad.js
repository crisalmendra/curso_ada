/*esta forma no funciona !!


console.log(fibonacci(20));
console.log(***´RECURSIVIDAD´***);

function fibonacci(n){
	var x =1;
	var x1= 0;
	var x2= 1;

for (var i =0; i<n; i++){
	 X += fibonacci(i-1) + fibonacci(i-2);
	}

	return x;
}

var cantConejos = fibonacci(20);
console.log(cantConejos);


tabla

i     x    f(i-1)   f(i-2)
0	  1	     0			1 
1     1      1			0
2     2		 1          1
3     3		 2          1

*/

// forma optima!

var num;

function fibonacci(num){
	
	if(num<=1) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2);
}

var cantConejos = fibonacci(7);
console.log(cantConejos);