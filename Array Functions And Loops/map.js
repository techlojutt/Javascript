// it works like foreach() but the one difference is that
// it returns array and length of that array is equal to 
// the original length input length .
// if we give any return in a callback function ,then it 
// prints that return in the array that is returned by map() 

var studentNames = ["Abubakar","Umar","Usman","Ali","Muavia"];

function getNewElements(value){
    if (value=="Umar") {
        return value + " you achieved excellent grade";
    }
 return value + " you,re passed";
}


var returnResult = studentNames.map(getNewElements);
console.log("Return :",returnResult);

var numArray = [10,20,30,40,50,60];
function newNumArray(value) {
    return value*2;
}

var returnArray = numArray.map(newNumArray);
console.log("return : ",returnArray);