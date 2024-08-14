let car = {
    color : "red",
    company : "Kia",
    model : "2022",
    nummberOfDoors : "4",
}

let restOfCarProperties = {
    ccEngine : 1500,
    auto : true , 
    price : 4847483,
}

let carProperties = {
    ...car,
    ...restOfCarProperties,
    key : "any new key" 
}
car.anyNewKey = "engine" ;
delete car.anyNewKey ;
console.log(car);
let keys = [];
for (let key in car) {
    keys.push(key)
}
console.log(keys);

//object.keys convert object keys into array
//object.values convert object values into an array

let objectKeys = Object.keys(car);
let objectValues = Object.values(car);
console.log(objectKeys);
console.log(objectValues);


//object.entreies convert the object key and value into 
// the single index of an array 

let objectEntries = Object.entries(car);
console.log(objectEntries);
console.log("values",objectEntries[1][1]);
// we cannot add or delete the keys in object if we apply the freeze function
// on object
// let values = Object.freeze(car);
car.newkey = "value";
console.log(car);

// by using seal we can  modified existing keys but cannot add new keys

// let value  = Object.seal(car);
// car.engine = "500cc" ;
// car.model = "2020" ;
console.log(car);


// we can concat two objects by using assign()

let newObject = Object.assign(car,restOfCarProperties);

console.log(newObject);

// we can concat two objects by using spread operators  and we can also add
// new properties 
//spread can also use in  an array 
console.log(carProperties);


// by using object key in curly braces , a new variable will form on a run time 
// and it holds the value of that key,

let {color} = car ;
console.log("color ",color);


let listOfCarNames = ["Honda","Toyota","kia"];
let [firstCar,secondCar] = listOfCarNames ;
console.log("firstCar",firstCar,"secondCar",secondCar);
let thirdCarName = listOfCarNames[2];
console.log(thirdCarName);

// if we want to make a variable of key and the rest of a object we use the
// following syntax 

let {model,...rest} = car;
console.log(rest);
console.log(model);


let [firstcar , ...restOfArray] = listOfCarNames ;
console.log(restOfArray);
console.log(firstCar);














