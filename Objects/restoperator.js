function addNumbers(a,b,...args){
    firstArgument = args[0];
    secondArgument = args[1];
    console.log(firstArgument,secondArgument);
    args.forEach((val,index)=>{
        console.log("value",val,index);
    })
}


addNumbers(1,3,31,141,12,31123);



