//foreach() does not return any value,it is a loop and it run up to the length of the array 
//it recieves function as an argument , it gives element,index and original array at every iteration
//actually it calls the function until the length of the array and it gives argument when call
//it gives element , index and array as an argument
var listOfStudentNames = ["Shoaib","Bilal","Saad","Umair","Saljok","Tibiyan"];
function getElements(element,index)
{
  if(element == "Saljok")
    {
      console.log(`${element} You,re Passed`);
    }
}
listOfStudentNames.forEach(getElements);


