	 /* abc original

		 1) ABCDEFGHIJKLMNOPQRSTUVWZ
 		 2) STUVWXYZABCDEFGHIJKLMNOP

 		 Ej. de encriptacion:
 		 HOLA = ZGDS

 		 Me tiene que devolver el texto encriptado

 		 console.log(encriptar("hola"));*/

 		 var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","v","w","x","y","z"];

 		 var abcDesplazado = [];

 		 var n = 6;

 		 for (var i = 0; i < abc.length; i++){
 		 	//console.log ( " i: " + i);
 		 	//console.log("i + n: " + (i+n));
 		 	//console.log("(i+n) % abc.length:" + ((i + n) % abc.length));

		 	abcDesplazado[(i + n) % abc.length] = arr[i];
 		 }

 		 console.log(abc;)
 		 console.log(abcDesplazado);

 		 var mensaje = "mensajito";
 		 var mensajeEncriptado = "";


 		 /*itero por cada carecter de mi string
 		 for (var i = 0; i < mensaje.length; i++){
 		 	//itero por cada caracter del abc
 		 	for (var j = 0; j<abc.length; j++){
 		 		if (mensaje[i] === abc[j]){
 		 			mensajeEncriptado += abcDesplazado[j];
 		 			
 		 		}
 		 	}
 		 }*/


 		 //FORMA OPTIMA DE HACERLO
 		 for (var i = 0; i < mensaje.length; i++){
 		 	var idxCaracter = abc.indexOf(mensaje[i]);
 		 	mensajeEncriptado += abcDesplazado[ idxCaracter];


 		 console.log(mensajeEncriptado);