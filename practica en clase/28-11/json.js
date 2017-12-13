
$(document).ready(function(){

//es un objeto y por eso tiene sus propios metodos
var jdatos={
	"nombre" : "pepe", "apellido" : "perez", "edad" : 35, "foto" : null}

console.log(jdatos);

//aplicamos un metodo para tranformar los objetos a la estructura json
var jdatosJson=  JSON.stringify(jdatos);

console.log(jdatosJson);

var link = '<a href = json.html?dato='+jdatosJson+'>hola</a>';
$('body').append(link);


});