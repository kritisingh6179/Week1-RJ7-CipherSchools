//1    .map()
let array=[1,2,3,4,5];
// let newArray=[];
// for(let i=0;i<array.length;i++){
//     newArray[i]=array[i]*array[i];
// }
// console.log(newArray);
let newArray=array.map((element,index)=>{
    console.log(index);
    return element*element;
});
console.log(newArray);
//In  JS, a function is also a js object

//2    .foreach() ,return type void
let a=[2,6,7,3,4];
a.forEach((element,index)=>{
    console.log(index);
    console.log(element);
});

 //     3.filter()
 let b=[10,20,30,40];
//  vector<int> v;
//  for(int i=0;i<sizeof(b)/sizeof(b[0];i++)){
//     if(b[i]>=30){
//         v.push_back(b[i]);
//     }
//  }
let x=b.filter((element)=>{
    return element>=30;
});
console.log(x);

//      4.find()
let d=[34,8,9];
let t=d.find((value)=>{
    return value>20;
});
console.log(t);

//     5.sort()
let r=[90,80,70,60];
// let br=r.sort();
//comparator  function
let sortedr=r.sort((el1,el2)=>{
    el1=Number(el1);
    el2=Number(el2);
    return el1-el2;
});
console.log(br);


//Object destructuring
let myObject={
    name: "Alex",
    age:24,
    address: {
        street:"Brooklyn",
        city:"New York",
        state:"NY",
        country:"usa",
        passportdetails:{
            passno:"abc123",
        },
    },
};
console.log(myObject.address.passportdetails.passno);


//array matching
//if(array1,array2)
//object matching
let obj1={name:"Shantanu",age:24};
let obj2={name:"Shantanu"};
function areEqual(obj1,obj2){
    if(obj1==obj2){
        return true;
    }
    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key]=="undefined"){
            return false;
        }
        if(obj2[key]!=obj1[key]){
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1,obj2));

//Maps and sets
let map=new Map();
map.set(1,"ram");
map.set(2,"shyam");
console.log(map);

let set=new Set();
set.add(1);
set.add(-1);
console.log(set);

//classes
class Animal{
    legs;
    family;
    sound;
    color;
    constructor(legs,color,family,sound){
        this.legs=legs;
        this.color=color;
        this.family=family;
        this.sound=sound;
    }
    showanimal(){
        console.log(`the animal belons to family ${this.family}`);

    }
}
let animal= new Animal(4,"brown","rodent","something");
console.log(animal);
animal.showanimal();

