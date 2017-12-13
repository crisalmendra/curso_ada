/*>>>>>>>*///var cajas = document.getElementsByTagName('div');
/*Es para llamar ETIQUETAS del documento HTLM recibe un string*/


/*>>>>>>>*/ var cajas = document.getElementsByClassName('box');
/*Es para llamar CLASES del documento HTLM recibe un string*/

/*>>>>>>>*/var primeraCaja = document.getElementById('primeraCaja');
/*Es para llamar ID del documento HTLM recibe un string*/

/*>>>>>>>*/ cajas[0].textContent = "Hola mundo";
/* Es una propiedad, que muestra el contenido textual
se puede reasignar con otro contenido*/

primeraCaja.innerHTML = '<h1>Hola mundo</h1>';
/*Es una propiedad, ejemplo como una caracteristica, ejemplo la posicion
el color si esta visible o no y lo contrario que es el metodo que
indica una accion--- me permite agregar contenido y ademas especificar
en que formato ejemplo un h1*/

/*>>>>>>>*/ var caja = document.createElement('div'); 
/*El document es el nodo principal, 
y solo desde ahi se puede crear nuevos nodos*/

/*>>>>>>>*/ var contenido = document.createTextNode('Hola');
/*Es un metodo que recibe como parametro un string, 
y crea contenido*/

caja.appendChild(contenido);
/*Agrega un nodo dentro de otro, ejemplo crea o mete contenido 
dentro de caja y quedaria caja como el padre y el contenido seria
el hijo*/

caja.setAttribute('class','caja naranja');
/*es un metodo que se le llama para agregarle los estilos 
de una clase o elemento a otra-- en ese caso le esta agregando
las clases caja y naranja a el elemento o variable caja que no tenia
ningun valor y si tenia otro se modifica mediante este metodo*/

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);
/*aqui se agrega el nodo caja contenido por un padre en este caso
contenedor que seria una section en este caso.
En este caso se llama una variable llamada contenedor por su id,
y luego se llama con appenchChild y se le agrega caja*/

primeraCaja.style.backgrounColor ="blue";
/* Cambia las propiedades del elemento, ejemplo se configuran
los elementos cuando hayan eventos, ejemplo cuando se de clik en
una imagen se agranda y se ve con un borde de algun color.Pisa los
estilos de css*/

contenedor,inserBefore(caja, cajas[2]);
/*Es para cambiar de posicion una caja por otra, caja es el elemento
que habiamos creado.*/

contenedor.raplaceChild(caja,cajas[2]);

contenedor.removeChild(cajas[3]);
