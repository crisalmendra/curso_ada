var planetas = ["mercurio",
"venus",
"tierra",
"marte",
"jupiter",
"saturno",
"urano",
"neptuno",
"pluton"];//9 elementos

console.log(planetas.push(["ofiuco", "luna"]));
console.log(planetas[9][0]);

//var arrayDestroyed = planetas.pop();
//console.log(planetas);
//console.log(arrayDestroyed);



var lunaDestroyed = planetas[9].pop(); //retorna el elemento eleminado en este caso luna!
console.log("saco luna:" , lunaDestroyed);
console.log(planetas);

