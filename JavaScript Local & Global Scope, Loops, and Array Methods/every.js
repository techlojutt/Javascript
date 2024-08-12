// everyloop checks if the given condition is true for all elements in an
// array it returns true otherwise it returns false


const array = [20,20,20,20,20,10];

var returnResult = array.every((value)=>{
  return value == 20 ;
})
console.log(returnResult);

