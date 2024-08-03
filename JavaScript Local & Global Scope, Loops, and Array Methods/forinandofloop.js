let car = {
    color: "Red" ,
    company: "Honda" ,
    ccEngine:1500,
    doors:4
}
for (key in car) {

    console.log("item",key,car[key]);
        
    }

var country = "pakistan";

for (item of country) {
    console.log("item",item);
}

//calling function before declaration is called hosting