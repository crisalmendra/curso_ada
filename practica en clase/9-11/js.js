$(document).ready(function(){

$('#texto').hide(); //traigo el div con su id- esta linea se ejecuta cuando se carga el documento (cambio el display)


/* SELECTORES

$('#id')//id
$('.class')//clase
$('#enviar') //trae el nodo
$('.caja')
.addClass (agrega clases) ej= addClass('ocultar')
.removeClass (elimina clases)
.hide (oculta)//display oculta
.show(muestra)//display muestra (tiene 2 parametros, puede ser velocida y una funcion de collback funciones (eventos))
.prop('display','none'); /accedo al atributo directo del elemento 


*/

$("img").click(function(){
	$(this).hide(); //oculta "ESE" elemento (tags imaganes)
});


$('.caption').click(function(){
 	$(this).toggleClass('discos');

})


});