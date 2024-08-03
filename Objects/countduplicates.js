function countDuplicatesinAnArray(array){
    for (var i = 0; i < array.length; i++) {
        var value  =   array[i] ;
        var count = 0 ;
        for (var j = i+1; j < array.length; j++) {
            if(value==array[j]){  
                count++;
                array.splice(j,1);
                j--;
            }      
    }
     if(count>=1){
     console.log(value,count);} 
}       
}

var array = ["Student3","Student3","Student3","Student1","Student1","Student2","Student1","Student2","Student1"];
countDuplicatesinAnArray(array);