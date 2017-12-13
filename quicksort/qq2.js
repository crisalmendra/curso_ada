//arreglo a ordenar

var arreglo=[];

for (var i = 0; i<10; i++){
    arreglo[i] =  Math.floor((Math.random()*100));
}

 
console.log(arreglo);

 quicksort(0,(arreglo.length-1));

console.log(arreglo);

 function quicksort(primero,ultimo){
    //definimos variables indices
    i = primero
    j = ultimo
 
    //sacamos el pivote de la mitad del arreglo
    pivote = arreglo[parseInt((i+j)/2)];
 
   
    while (i<j){

        //mientras arreglo[i] sea menor a pivote
        while(arreglo[i]<pivote)
            i++;
        //mientras j sea mayor a pivote
        while(arreglo[j]>pivote)
            j--;
 
        //si el indice i es menor o igual a j entonces intercambiamos
        if(i<=j){
 
            //variable temporal auxiliar para guardar valor de arreglo[j]
            aux=arreglo[j];
 
            //intercambiamos los valores de arreglo[j] y arreglo[i]
            arreglo[j] = arreglo[i]
            arreglo[i] = aux
 
            // incrementamos y decrementamos i y j
            i++;
            j--;
 
            
        }

    }

    if(primero<j){

                  quicksort(primero,j);
                 
               }
                        //si ultimo es mayor que i llamamos la funcion nuevamente
                if(ultimo>i){
 
                   quicksort(i,ultimo);

                }
   
   
 console.log(arreglo);
}
 
