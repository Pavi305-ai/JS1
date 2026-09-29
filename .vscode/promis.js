const myPromise = new Promise((resolve , reject)=>{
    let success =true;
    if(success){
        resolve("Sucess");
    }else{
        reject("Fail");
    }
});
//usage
myPromise.then((successResult)=>{
    console.log(successResult);

})
.catch((failureResult)=>{
    console.log(failureResult);
});
