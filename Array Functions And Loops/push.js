var listOfStudentNames = ["Student1","Student2","Student3","Student4"];
/*listOfStudentNames[4] = "new name";
listOfStudentNames[listOfStudentNames.length] = "new name";*/
listOfStudentNames.push("Umar","Bilal","Suleman"); //add elements in the end of an array,it returns the count of elements in an array
//console.log(listOfStudentNames);
listOfStudentNames.unshift("Umair","Saad","Saljok"); //it returns the count of elements in an array and add elements at the start of an array
console.log(listOfStudentNames); //add elements in the start of an array
listOfStudentNames.pop() //delete elements at the end of an array 
// pop() doesnot accept any argument , pop() returns the deleted element
listOfStudentNames.shift(); // delete elements at the start of an array ,shift() returns the deleted element
// shift() doesnot accept any argument
console.log(listOfStudentNames)

listOfStudentNames.splice(listOfStudentNames.length-3,3,"shoaib"); // it returns the removing elements in the form of an array,it can delete or add elements in the Array
console.log(listOfStudentNames)
var returnResult = listOfStudentNames.slice(0,2) // it does not affect on the original array but it returns the cutting array
console.log(returnResult);
listOfStudentNames.splice(2,2);
console.log(listOfStudentNames)


