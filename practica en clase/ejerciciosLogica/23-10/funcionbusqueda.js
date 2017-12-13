var nombre = "fido"; //variables globales
var nombres = [´lala´,´po´,´disy´,´fido´]; 

function buscandofido(nombre, nombres){

var encontrado = falso; // variables locales (solo esta definida dentro de la funcion)
for (i = 0, i < nombres.length, i++){
	if(nombre == nombres[i]){
		encontrado = true;
	}
  }	

return encontrado;

}

if ( buscandofido(nombre,nombres) == true){
	console.log(´encontre a Nemo´);
}

/* modo mas optimo!! 

function buscandofido(nombre, nombres){
var i;  

for (i = 0, i < nombres.length, i++){
	if(nombre == nombres[i]){
		return true; //parametros y retorno
		}
    }	
return false;
}

if ( buscandofido(nombre,nombres) == true){
	console.log(´encontre a Nemo´);
}  */