
var myArray = [];


for (var i = 0; i<15; i++){
    myArray[i] =  Math.floor((Math.random()*100));
}

console.log(myArray);

var posicionPivot = Math.floor((Math.random()*myArray.length));
var pivot = myArray[posicionPivot];
console.log(posicionPivot);
console.log(pivot);



/*function quickSort(myArray, left, right) {

  if (pivot < myArray.length) {
    return [];
  }

  var left = [];
  var right = [];
  

  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] < pivot) {
      left.push(myArray[i]);
    }
    else {
      right.push(myArray[i]);
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([]));*/