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
            if(true){
                resolvefn("JR");
            }else{
                rejectfn("no author");
            }

        },2000);

    })
}

getFirstAD()
.then((successMessage)=>{
    console.log("successMessage");
    return getSecondAD()
}).catch(()=>{
    //code
})

.then((successMessagetwo)=>{
    console.log(successMessagetwo);

}).catch((failMessage)=>{
    console.log(failMessage);

})