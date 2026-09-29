//var age=10;
//console.log(age);
//let age = 10;
    age = 20;
    age = 30;
//let age = 34; we can not declare again let keyword

//const age=10;
    //age=7;we can not reassignment
//connst can not redclear

let customerdetails = {
    "name" : "pavithra",
    "Age"  : "24",
    "phonenumber" :"9435790"
}

console.log(customerdetails);
console.log(customerdetails.name);
console.log(customerdetails.Age);
console.log(customerdetails.phonenumber);

let softwaredetails = {
    "ram" : "8gb",
    "version" : "win11",
    "processer" : "intelcore",
    hardware : ["tools","mouse"],
    hardwaredetails : {
    "tools" : "hardware tools",
    "mouse" : "2"
    }
}

console.log(softwaredetails);
console.log(softwaredetails.ram);
console.log(softwaredetails.version);
console.log(softwaredetails.processer);

console.log(softwaredetails["hardwaredetails"]);
console.log(softwaredetails["hardwaredetails"].tools);

//Array of objects
let cars = [
    {
        carname : "car1",
        carcolour : "red",
        lunch : "2026"
    },
    {
        carname : "car2",
        carcolour : "blue",
        lunch : "2025"
    },
    {
        carname : "car3",
        carcolour : "yellow",
        lunch : "2024"
    }
];

console.log(cars[0].carname);
console.log(cars[1].carcolour);