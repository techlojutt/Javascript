var addTwoNumbers = (a,b) => {
   var add =  a+b;
   console.log(add);
   return add;
}

var result = addTwoNumbers(20,40);
console.log(result);

var multiplyTwoNumbers = (a,b) => a*b ;
var returnResult = multiplyTwoNumbers(40,50);
console.log(returnResult);


var numArr = [12,31,35,53,63,124];
var newArr = numArr.map((value,index) =>  {
  return value*index;
})
console.log(newArr);