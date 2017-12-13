//arreglo a ordenar
arreglo=[10,9,19,8,1,12,14,0,5,6,9,17,10,4,5,3,2,3,4,5,6,7,88,77,66,55,44,33,21,2,33,44,73,78,9,2,3,0,1,8,1,13];
 
console.log(arreglo);

 quicksort(0,(arreglo.length-1));

 function quicksort(primero,ultimo){
    //definimos variables indices
    i = primero
    j = ultimo
 
    //sacamos el pivote de la mitad del arreglo
    pivote = arreglo[parseInt((i+j)/2)];
 
   
    iteracionQS(i,j,pivote,primero,ultimo)
 
}
 
//funcion que suplanta el while y se llama recursivamente
function iteracionQS(i,j,pivote,primero,ultimo){
 
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
 
            console.log(arreglo);
        }
 
        //repetimos
    if(i<j){
      
            iteracionQS(i,j,pivote,primero,ultimo);
    }else{
         //si primero es menor a j llamamos la funcion nuevamente
                if(primero<j){

                  quicksort(primero,j);
                 
               }
                        //si ultimo es mayor que i llamamos la funcion nuevamente
                if(ultimo>i){
 
                   quicksort(i,ultimo);

                }
    }
}