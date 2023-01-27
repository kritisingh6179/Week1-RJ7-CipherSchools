//promise is a class in js
//constructor(function)
let promise=new Promise((fulfilled,notfulfilled)=>{
    let num1=10;
    let num2=15;
    let sum=num1+num2;
    if (sum>24){
        fulfilled();
    }
    else{
        notfulfilled();

    }
});
promise.then(()=>
{
    console.log("promise was fulfilled")
})
.catch(()=>{
    console.log("Promise not fulfilled");
});
//asynchronus behaviour of js
// function addtwono(num1,num2){
//     let s=0;
//     setTimeout(()=>{
//         console.log(num1+num2);
//         s=num1+num2;
//     },5000);
//     console.log("inside addtwono");
//     return s;
  
// }
// console.log(addtwono(3,6));

function addtwono(num1,num2){
    return myPromise=new Promise((f,nf)=>{
        setTimeout(()=>{
            console.log("inside settimeout");
            f(num1+num2);},5000);
            nf(new Error("an error occured"));
    });
}
addtwono(10,5);
myPromise.then(()=>
{
    console.log("promise was fulfilled")
})
.catch(()=>{
    console.log("Promise not fulfilled");
});