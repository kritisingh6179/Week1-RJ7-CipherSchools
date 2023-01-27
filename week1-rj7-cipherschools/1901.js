// In javascript , we can declare a variable in 3 ways.
//1. by using var
//2. by using let
//3. by using const
var myName="John";
console.log(myName);
// const is most strict,then let then var
const a=[];
console.log(a);
a.push("hello");
console.log(a);
// const a=5; not allowed .can't redeclare,can't modify
 let b="hii";
 console.log(b);
 b="okay"; 
 console.log("b");
 //let a=5; not allowed. can't redeclare but can modify
 //var global and let,const block scoped
 var m="Alex";
 console.log("m");
 

 //string interpolation
 let first="kriti";
 let last="singh";
 console.log(first+" "+last);
 //let fn=first+" "+last;
 let f=`${first} ${last}`;
 console.log(f);

 //default params
 function addtwono(num1,num2){
    return num1+num2;
 }
 let subtwono=(n1,n2)=>{
    return n1-n2;
 };
 //default argumment
 let divtwono=(n1,n2=5)=>{
    console.log(n1);
    console.log(n2);
  
 };
 let multwono=(n1,n2)=>    n1-n2;
console.log(addtwono(1,2));
console.log(subtwono(100,28));
console.log(multwono(12,28));

//rest and spread opreator are applicable in array and objects in js
let array=[5,10,15,20,25];
//spread => ...
//let newarray=array; does not copy in memory
let newarray=[...array,70,80];//copy of array
console.log(array);
console.log(...array);
//for object(unordered map,dicitionary) key value pair
let object={
    name: "anu",
    age:24,
    address:{
        city:"lucknow",
        state:"up",
    },
};
let object2={...object,country:"india"};
object2.address.city="varanasi";
console.log(object2);


//rest =>   ...
let maxoftwono=(num1,num2)=>Math.max(num1,num2);
let maxofthreeno=(num1,num2,num3)=>Math.max(num1,Math.max(num2,num3));
let maxofno=(...numbers)=>{
    console.log(numbers);
    let maximum=Number.MIN_VALUE;
    for(let number of numbers){
        maximum=Math.max(maximum,number);
    }
    return maximum;
}
console.log(maxofno(1,8,6,7,4,2));
