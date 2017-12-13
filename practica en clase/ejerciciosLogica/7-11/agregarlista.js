var frutas = ["manzana", "pera", "uva", "melon"];
function myFunction() {
var lista = document.getElementById('lista');
for(i=0; i<frutas.length; i++){
var li= document.createElement('li');
li.textContent= frutas[i];
lista.appendChild(li);
}
}

function limpiarLista() {
var lista = document.getElementById('lista');
var lis= document.getElementsByTagName('li');
for(j=0; j<frutas.length; j++){
	lista.removeChild(lis[0]);
}

}