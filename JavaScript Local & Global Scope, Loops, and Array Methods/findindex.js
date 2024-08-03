// findindex is same like a find loop but it returns index 
// instead of an element 
function callBackArrayFunction(item,index){
    // console.log(item,index);
    return item > 25 ;
}
var listOfNumbers = [10,20,30,40,50,60];
var result = listOfNumbers.findIndex(callBackArrayFunction);
console.log(result);
