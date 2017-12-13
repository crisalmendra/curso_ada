	var matriz = [['jaime', 'perez', '28'], ['lalo','pirulo','32'],['joaquin', 'burbuja','45']];
console.log(matriz);

$(document).ready(function(){

for(i=0; i<matriz.length; i++){
	var tr = '<tr id="registro_'+ i +'">'+ '<td>'+
	matriz[i][0]+'</td>'+'<td>'+
	matriz[i][1]+'</td>'+'<td>'+
	matriz[i][2]+'</td>'+'<td>'+
	'<button class="glyphicon glyphicon-pencil btnEditar" id="11" data-rg=".reg1">'+'</button>'+'</td>'+'<td>'+
		'<button class="glyphicon glyphicon-trash btnBorrar" id="1" data-rg="#registro_'+i+'">'+'</button>'+
		'</td>'+'</tr>'

$('#tabla').append(tr);

}

$('.btnEditar').on('click', function(){
		$(this).addClass('clicked');
		alert("estas seguro que queres editar?");
	});

$('.btnEditar').on('click', function(){
var btnId = $(this).attr('id');
alert("boton"+ btnId);
				   
});

$('.btnBorrar').on('click',function(){
     var btnId = $(this).prop('id');
     //var trId = "#registro_"+btnId;
     var trId = $(this).data('rg');// data es un atributo que solo recibe javascript
	$(trId).hide(1000,function(){//puede recibir 2 parametros la velocidad va en milisegundos + 1 una funcion de callback 
		alert("estas seguro?");
	});
});

$('.btnEditar').on('click',function(){
	var fila = $(this).data('rg');
	$('input').prop('disabled',true);
	$(fila).prop('disabled',false);

});

$('#add').on('click',function(){

	var tr = '<tr id="registro_x"><td><input type="text" class="registro_x" disabled</td>'+
			'<td><input type="text" class="registro_x" disabled</td>'+
			'<td><input type="text" class="registro_x" disabled</td>'+
			'<td><input type="text" class="registro_x" disabled</td>'+
			'<td><input type="text" class="registro_x" disabled</td></tr>';
	$('#tabla').append(tr);

});

$('#add').on('click',function(){
var nuevo = [];
var n = $('#nn').val();
nuevo.push(n);
nuevo.push($('#an').val());
nuevo.push($('#en').val());

matriz.push(nuevo);

console.log(nuevo);


});

});