// findloop looping untill the condition is not fullfill
//and after condition true it returns the value and after returning it stops the loop.

function callBackArrayFunction(item,index){
    // console.log(item,index);
   if(item>40){
   return item ;
   }
}
var listOfNumbers = [10,20,30,40,50,60];
var result = listOfNumbers.find(callBackArrayFunction);
console.log(result);


