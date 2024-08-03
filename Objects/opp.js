class Laptop {
    constructor(company,screenSize){
        this.company = company;
        this.screenSize = screenSize;
    }
    printCompanyName(){
        console.log("Company Name",this.company);
    }
}
class AdvanceLaptop extends Laptop{
   constructor(supportedDevices,company,screenSize){
    super(company,screenSize);
    this.supportedDevices = supportedDevices;

   }
}
var laptopObj = new AdvanceLaptop("camera","dell",14);
console.log(laptopObj);

