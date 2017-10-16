//ejercicios logica

var x;
if(x%2 ==0){
	console.log("el numero es par");
}
else{
	el numero es impar;
}

/*Segundo ejercicio*/

var N;
if(n<0 && n>7){
console.log ("numero invalido");
}
else if (n==1){console.log("lunes");}
else if (n==2) {console.log("martes");}
else if (n==3) {console.log("miercoles");}


/*variante ejercicio 2*/

var N;
if(n<0 && n>7){
console.log ("numero invalido");
}

if (n==1){console.log("lunes");}
if (n==2){console.log("martes");}


/*-------ejer2 resolucion con Switch------*/
/*el switch se usa cuando conozco los valores de los casos posibles*/
Switch /*segun el valor que toma la variable y si coincide con alguno de los casos que continuan*/
       (y){

	case 1: console.log("lunes"); break;
	case 2: console.log ("martes"); break;
	/*de otra manera hago esto*/
	default: console.log("no es valido"); break;
}

/*......... ejerc 3..................*/
var mes;
/*las variables que no son numericas se ponen entre comillas*/
switch (mes){
	case "febrero": console.log ("28 dias");break;
	case "abril": console.log ("30 dias");break;
	case "junio": console.log ("30 dias");break;
	case "septiembre": console.log ("30 de dias");break;
	case "noviembre": console.log ("30 dias");break;
 	default: console.log("el mes tiene 31 dias")
}


/*---------- ejer 3 - opcion  2-----------------*/

var  y = parseInt (prompt ("escriba el mes en numeros"));
/*parseint=convierte el stream en numero*/
/*prompt= es un panel que se abre para que ingrese algo*/
var dias31 = "tiene 31 dias";
var dias30 = "tiene 30 dias";
var dias28 = "tiene 28 dias";
var vacio = " "; /*stream vacio*/

switch (y){
	case 1: alert ("enero"+vacio+dias31);
	break;/*es equivalente a cerrar la llave del if, es para que corte y no corra todo*/
	case 2: alert ("febrero"+dias28);
	break;
	case 3: alert ("marzo"+dias31);
	break;
	case 4: alert ("abril"+ dias30);
	break;
	case 5: alert ("mayo"+dias31);
	break;
	case 6: alert ("junio"+dias30);
	break;
	case 7: alert ("julio" + dias30);
	break;
	case 8: console.log ("agosto"+dias31);
	break;
	case 9: console.log ("septiembre"+dias30);
	break;
	case 10: console.log ("octubre"+dias31);
	break;
    case 11: console.log ("noviembre"+dias30);
    break;
	case 12: console.log ("diciembre"+dias31);
	break;
    default: alert ("no es un valor valido");

}

/*-------------------ejer5-----------------*/


var letra= prompt("ingrese  una vocal");

switch (letra){
	case "A":
	case "a":console.log("vocal a");
			break;
	case "e":
	case "E":console.log("vocal e");
break;
	case "I":
	case "i":console.log("vocal i");
break;
	case "o":
	case "O":console.log("vocal o");
break;
	case "U":
	case "u":console.log("vocal u");
break;
default: alert("no es un valor valido");
}


/*---------------EJERC 6 -----------------*/

var x,z,y,total;

if(x>y){
	total=x-z;
	if(total>y){
	}
} else{
	total=(x+z)*y
}
}
/*-------- ejer 6 otra forma de escribirlo, invierto el operador aritmetico--------------*/

if (total<y){
	total=(x+z)*Y;
}

/*-----uso operador "negacion" opcion 3 ejer 6-----------*/

if(!(total>y)){
	total=(x+2)*y;
}

/*-------------ejer 7-------------*/
var sueldo = 40000;
var ant;
//ant> 10 sueldo + 10%
//ant<10 y ant>5  sueldo + 7%
// 3<ant y <5 sueldo+5%
//ant <3  sueldo+3%

if(ant>10) {
	sueldo = sueldo + 0.1
}else if(ant <=10 && ant>5){
      sueldo= sueldo + 0.7*sueldo;
}else if (ant<=5 && >3){
	sueldo= sueldo + 0.5*sueldo;
}
else{//ant<=3
	sueldo = sueldo + 0.03*sueldo;

}