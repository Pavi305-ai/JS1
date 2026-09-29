function redcolor(){
    console.log("%c    ", "background-color:red");
}

redcolor()

function firstsection(){
    console.log("%c   ","background-color:blue");
    console.log("%c   ","background-color:red");
}
firstsection()

function secondsection(){
    console.log("%c   ","background-color:green");
    console.log("%c   ","background-color:skyblue");
}
secondsection()

function fruits(fruitname,fruitcolor){
    console.log("fruitname" + fruitname );
    console.log("fruitcolor" + fruitcolor );

}
fruits("apple","red")
//optional parameter
function colordetails(colorname,colorid="999"){
    console.log("colorname" + colorname);
    //colorid = colorid || "not available"
    console.log("colorid"+colorid);
}
colordetails("red")


//rest parameters
function animals(...additionalparams){
    console.log("animalname" +additionalparams);
    console.log("animalid"+additionalparams);
}

animals("cat","1","black")

