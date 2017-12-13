//var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja');
// elements es en plural, para clases 

var primeraCaja = document.getElementById('primeraCaja');

cajas[0].textContent = "Hola mundo";

primeraCaja.innerHTML = '<h1>Hola mundo</h1>';

var caja = document.createElement('div');
//crea un nuevo elemento (un div)
//document es toda la estructura de html (body) 
var contenido = document.createTextNode('Hola');
//creamos un nodo de texto. createTextNode es un metodo

//agregar un nodo dentro de otro
caja.appendChild(contenido);

//setAttibute es un metodo
caja.setAttribute('class' 'id','caja naranja', 'negrita');

//caja es una variable
var contenedor = document.getElementById('contenedor');
//element (sin s), es cuando es unico, con un id- En el document (es el objeto) traeme el elemento que tga un id
contenedor.appendChild(caja);


.getElementsByTagName('string');
//elementos generales, etiquetas;


caja.textContent; //devuelve 'Hola'
//es una propiedad que me devuelve el contenido textual de las llaves(> y <) de las etiquetas

caja.textContent; //devuelve 'Hola'
//caja es una variable

primeraCaja.style.backgroundColor = "blue";

//movemos a la caja a la posicion deseada
contenedor.insertBefore(caja,cajas[2]);

//reemplaza  
contenedor.replaceChild(cajas[2],caja);
contenedor.removeChild(cajas[3]);