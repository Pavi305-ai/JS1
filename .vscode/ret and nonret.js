/*function getbookdetails(bookname,authorname){
    let bookdetails = "";
    bookdetails = "bookname:" +bookname+ "  " +"authorname:"+ authorname;
    return bookdetails;

}
console.log(getbookdetails("gitanjali","rabindranath tagore"));

function showbookdetails(bookname,authorname){
    let bookdetails = "";
    bookdetails = "bookname:" +bookname+ "  " +"authorname:"+ authorname;
    

}
console.log(showbookdetails("gitanjali","rabindranath tagore"));
let showmessageofbook = showbookdetails("gitanjali","rabindranath tagore");
console.log(showmessageofbook);

//anonymous function
var showbn = function() {
    let bookname = "harry potter series";
    console.log(bookname); 
}
showbn()

//parameters
var showbn = function(bn,bc,ba){
    console.log(bn);
    console.log(bc);
    console.log(ba);
}

showbn("r","red","jixfdrch") 
*/
/*(
    function(bookname){
        console.log(bookname);
    }
)("harry potter series")
*/


//callback function----------------------
/*
function sayHello(callbackfn){
    callbackfn(10,20);
}

sayHello(function(a,b){
    console.log("hello world");
    console.log(a);
    console.log(b);
});


setTimeout(function(){
    console.log("test");
},1000);

*/
//ARROW function-------------------------------


//function showAuthorName(){
//    console.log("Rabindranath tagore");

//}
//showAuthorName();

// let showAuthorName = ()=>{
//     console.log("Rabindranath Tagore");
// }

// showAuthorName();
// function show(name,age,dob){
//     console.log(name);
//     console.log(age);
//     console.log(dob);

// }

// let show =(name,age,dob)=>{

//     console.log(name);
//     console.log(age);
//    console.log(dob);


// }
// show("pavi",24,"2002");

// function show(){
//     return 'author = ${"pavi"}, ${age},${dob} '
// }
let show=(name,age,dob)=>{
    return 'author = ${"pavi"}, ${age},${dob}' 


}
show()

