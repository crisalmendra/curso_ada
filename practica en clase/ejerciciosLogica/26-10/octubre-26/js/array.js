var tierra = ["capricornio", "tauro", "virgo"];
var agua = ["cancer", "escorpio", "piscis"];
var aire = ["libra", "acuario", "geminis"];
var fuego = ["aries", "leo", "sagitario"];

/*
var signos = [tierra, agua, aire, fuego];

var j = 4;
for (var i = 0; i < signos[i].length; i++) {
	if (j == 4 && i == 0){
		console.log("--------CARDINAL----------");
	}else if (j == 4 && i == 1){
        console.log("----------FIJO------------");
	}else{
		console.log("--------MUTABLE----------");
	}	
		for (j = 0; j < signos.length; j++) {
			console.log(". "+(signos[j][i]));
		}	
}*/

//muestra elementos por modalidad
var signos = [tierra, agua, aire, fuego];


for (var i = 0; i < signos[i].length; i++) {
	switch(i){
		case 0: msj = "-------cardinal-----------";
		break;
		case 1: msj = "-------fijo---------------";
		break;
		case 2: msj = "-------mutable------------"; 
		break;
	}
	console.log(msj);

		for (j = 0; j < signos.length; j++) {
			console.log(". "+(signos[j][i]));
		}	
}

/* muestra elementos por tipo (agua,fuego, aire,tierra)

var signos = [tierra, agua, aire, fuego];

for (i = 0; i < signos.length; i++) {

	switch(i){
		case 0: elementos = "-------tierra-----------";
		break;
		case 1: elementos = "-------agua---------------";
		break;
		case 2: elementos = "-------aire------------";
		break;
		case 3: elementos = "-------fuego------------";
		break;
	}
	console.log(elementos);

		for (var j = 0; j < signos[i].length; j++) {
			console.log(". "+(signos[i][j]));
		}	
}*/



