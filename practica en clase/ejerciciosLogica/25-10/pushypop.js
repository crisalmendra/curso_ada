var notas = ["do","re","mi","fa","sol"];

//METODO PUSH Y POP

var notasPush = notas.push("la", "si"); //retorna la cantidad de elementos total(6)
//notas.pop();
//notas[4] = "la";
//notas[5] = "si";

console.log(notasPush); //6 cantidad de elementos

console.log("el valor que retorna push es igual al length: " + (notasPush === notas.length));//true

console.log("array con push: " + notas);

var notaSi = notas.pop();//si
var notaLa = notas.pop();//la
console.log(notas);
console.log(notaSi, notaLa);

/*var notaEliminada = notas.pop();// (pop no acepta variables pero si devuelve)
console.log(notaEliminada);*/


//agrega y quita del principio del array
//Hacer lo mismo con shift(no recibe parametros, retorna el elemento eliminado) , unsfhift(recibe parametros, devuelve un valor de tipo numerico) 

var notas = ["do","re","mi","fa","sol"];
console.log(notas.indexOf("re"));// indexof te devuele un dato numerico, el indice del elemento seleccionado ""

var reIndice = notas.indexOf("re");//1 guardo el valor del indice de re en una variable
var reMuestro = notas[reIndice];
console.log(reMuestro);

//console.log(notas.indexOf("jirafa"));//cdo no encuentra en el elemento devuelve -1

if(notas.indexOf("crema") > -1){
	console.log("Tenemos stock")
}else{
	console.log("no tenemos vuelva pronto")
}