datos1 = ["fido", "gomez", 26, 15000.78, true]; 
datos2 = ["gervasio", "fernandez", 32, 28.550, false];

for (var i=0;i<datos1.length;i++){

	//if(typeof(datos1[i]) == number && typeof(datos2[i]))

	if(Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])){
		if(datos1[i]>datos2[i]){
			console.log ("fido es mayor");
	}else{
		console.log("fido es menor");
	}	
}

if(typeof(datos1[i]) == "boolean" && typeof(datos2[i]) == "boolean"){

	 if(datos1[i]){ 
	 	console.log("casado");
		}else{
			console.log("soltero");
		}

	if(datos2[i] === true){console.log("casado");}
		else{console.log("soltero");}
}
}



/*tabla de la verdad

i   datos1[i].isIntenger  datos2[i].isInteger  &&