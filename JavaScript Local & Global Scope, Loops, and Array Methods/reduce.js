// reduce() is a loop which returns the last return on every iteration 
var listOfNumbers = [10,20,30,40,50,60];
var namelist = ['Shoaib',"bilal","Saad","Umair"]

function reduceCallBack(lastReturn,currentitem,index,array){

 console.log("current item",currentitem);
 console.log("last return",lastReturn);
 
 
  return currentitem+lastReturn;
 
}

var result = listOfNumbers.reduce(reduceCallBack);
console.log(result);








