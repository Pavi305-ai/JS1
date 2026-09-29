function getFirstAD(){
    return new Promise((resolvefn,rejectfn)=>{
        setTimeout(()=>{
            console.log("Task 1 completed (1s) ");
            resolvefn("RT");
        },1000);

    })
}

function getSecondAD(){
    return new Promise((resolvefn,rejectfn)=>{
        setTimeout(()=>{
            console.log("task 2 completed (2s)");
            resolvefn("JR");

        },2000);

    })
}
console.time("promisTime");
getFirstAD()
.then((successMessage)=>{
    console.log("successMessage");
    return getSecondAD()
    console.timeEnd("")
})

.then((successMessagetwo)=>{
    console.log(successMessagetwo);

});