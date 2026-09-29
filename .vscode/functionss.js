//declaration
function greet(){
    console.log("hello students");

}
greet();

//parameters and arguments
function greet(name){
    console.log("hello" +   name);

}

greet("pavi");
greet("rahul");

//example
function add(a,b){
    console.log(a+b);
}
add(10,30);


function add(a,b){
    return a +b;
}
let result = add(10,20);
console.log(result*2);
//variable add fun
const adds = function(a,b){
    return a +b
}
console.log(adds(10,40));

//anonymous
const greet = function(){
    console.log("hello");
};

//function(){
 //   console.log("hello");
//}


// function flow(){
//     console.log("h");

// }
// function process(callback){
//     callback();
// }
// process(flow);