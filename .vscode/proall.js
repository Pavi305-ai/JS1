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

Promise.all([getFirstAD(),getSecondAD()]).then((allMessage)=>{
    console.log(allMessage)

})