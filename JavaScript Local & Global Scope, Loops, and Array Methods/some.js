// someloop is same like that everyloop but the only difference is that ,
// someloop returns true if atleast one condition is true 

const array = [76,234,354,234,23,43];

var returnResult = array.some((value)=>{
    console.log(value);
    return value == 234;
})
console.log(returnResult);
