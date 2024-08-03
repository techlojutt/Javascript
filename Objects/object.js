var laptop = {
    color : "black" ,
    company : "apple",
    screenSize: 16 ,
    isNew : false ,
    supportedOutputDevices:["camera","microphone","hdmi","speaker"],
    ram:{
        type:"6",
        memory:"8GB",
        company:"Samsung",
        rgb : "false",
    }
}
laptop.abc = "abc" ;
laptop.isNew = true ;
delete laptop.abc;
console.log(laptop.hasOwnProperty("isNew"));

var laptops = [{
    color : "black" ,
    company : "apple",
    screenSize: 16 ,
    isNew : false ,
    supportedOutputDevices:["camera","microphone","hdmi","speaker"],
    ram:{
        type:"6",
        memory:"8GB",
        company:"Samsung",
        rgb : false,
    }
},{
    color : "silver" ,
    company : "hp",
    screenSize: 14 ,
    isNew : true ,
    supportedOutputDevices:["camera","microphone","hdmi","speaker"],
    ram:{
        type:"6",
        memory:"16GB",
        company:"asus",
        rgb : false,
    }
},{
    color : "red" ,
    company : "dell",
    screenSize: 12 ,
    isNew : false ,
    supportedOutputDevices:["camera","microphone","hdmi","speaker"],
    ram:{
        type:"6",
        memory:"8GB",
        company:"Samsung",
        rgb : "false",
    }
}];




laptops.forEach((laptop)=>{
    if(laptop.company=="hp")
    console.log(laptop.color);
})




// for (var i = 0 ; i < laptop.supportedOutputDevices.length; i++) {
//     console.log(laptop.supportedOutputDevices[i]);
// }

