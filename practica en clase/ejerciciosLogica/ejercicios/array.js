/*

var semana = [50,35,105,40,25];


for (var i = semana.length - 1; i >= 0; i--){

	console.log(semana[i]); 

}
*/
/*
var semana = [50,35,105,40,25];
totalSuma = 0;

for (var i = 0; i<semana.length; i++){
	totalSuma = totalSuma + semana[i];

}

console.log (totalSuma);

var promedio = totalSuma/semana.length;
console.log (promedio);
*/

/*ventas mayores o igual a 50
var semana = [50,35,105,40,25];


for (var i = 0; i<semana.length; i++){

	if (semana[i]>=50){
		console.log(semana[i]);
	}
}*/	

var semana = [50,35,105,40,25];
var dias = ["lunes","martes","miercoles","jueves","viernes"];
/*mostral el dia que vendio mas de 50*/
for (var i = 0; i<semana.length; i++){
		if (semana[i]>50){
			console.log(dias[i] + ":" + semana [i]);
		}