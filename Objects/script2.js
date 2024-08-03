function uniqueElementsInAnArray(array) {
    var duplicateArr = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i] ;  
        var count = 0 ;                   
        for (var j = i+1 ; j < array.length; j++) { 
            if (value == array[j]) { 
            count++; 
            array.splice(j,1);
            j--;
        }  
    }
      if(count <= 0 ){
          duplicateArr.push(value);
        }
    }
return {array,duplicateArr}  ;
}         
var array = [8,1,1,1,2,2,1,4,3,5,5];
var returnResult = uniqueElementsInAnArray(array);
console.log(returnResult) ; 
 