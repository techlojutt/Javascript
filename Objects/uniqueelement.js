function uniqueElementsInAnArray(array)
{
    for (let i = 0; i < array.length; i++)
    {
        for (let j = i+1; j < array.length; j++)
        {
            if(array[i]==array[j])
            {
                array.splice(j,1)
                j--;
            }   
        }
    }
    return array;
}
var arr = ["Student1","Student2","Student2","Student1","Student3","Student2","Student1","Student3","Student4"];
var uniqueArr = uniqueElementsInAnArray(arr);
uniqueArr.forEach((value) => {
    console.log(value);
})
