/* console.log("1"+2);
console.log("hi"+true);
console.log("5"+null);
console.log("8"+undefined);

console.log("6"/3);
console.log("6"*"3");
console.log("6"-2);
console.log("6"%4); 
console.log(true-1);
console.log(true+1);

console.log("--------Explicit Conversion--------");
console.log(Number("456"));
console.log(Number("pravin"));
console.log(String(123));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("pravin"));


//if block when false : false,0,"",null,undefined,Nan,-0
//if block when true : true,any number except 0,"pravin"," ",[] ,{}
if(-1){
    console.log("inside if block");
}


console.log("Double Equal ==");
console.log(2=="2");    
console.log(false==0);

console.log("Triple Equal ===");
console.log(2==="2");    
console.log(false===0);


let age=17;
age=18;
console.log(age);

var score=50;
score=60;
var score=70;
console.log(score); */


/* console.log("HOISTING IN JAVASCRIPT");
console.log(num1);
var num1=10; //  */

/* console.log("----SCOPE OF FUNCTIONs----");
function test(){
    if(1){
        const a=10;
    }
    console.log(a);
}
test(); */

/*    demo();

function demo(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
  */

/* const greet=function(){
    console.log("Good Morning");
}

greet(); */


/* function sample(callback){
    console.log("Inside Sample Function");
    callback();
};
function demo(){
    console.log("Inside Demo Function");
};

sample(demo); */

/* const example=function(a,b){
    return a+b;
};
console.log(example(10,10));


const add=(a,b)=>{
    return a+b;
};

console.log(add(10,5)); */



/* const name=["pravin","naveen","sachin","rahul"];
const newname=name.push("suresh");
console.log(name);
console.log(newname); */

/* const name=["pravin","naveen","sachin","rahul"];
const newname=name.unshift("suresh");
console.log(name);
console.log(newname); */

/* const name=["pravin","naveen","sachin","rahul"];
const newname=name.pop();
console.log(name);
console.log(newname); */

/* const name=["pravin","naveen","sachin","rahul"];
const newname=name.shift();
console.log(name);
console.log(newname); */



/* console.log("Slicing");
const name=["pravin","naveen","sachin","rahul"];
const array=name.slice(2,4);
console.log(array);
const arr=name.slice(-3);
console.log(arr);

const arrays=name.slice(-3,-1);
console.log(arrays);
 */

/* 
const array=[1,2,3,4,5,6,7,8,9];

let found=array.find(num => num%2===0);
console.log(found);

let filter=array.filter(num => num%2===0);
console.log(filter); */


/* let names=["raj","ram","ravi","rahul"];

let lengths=names.find(n => n.length > 4);
console.log(lengths); */


/* let array=[1,2,3,4,5];

let mapped=array.map(n=>n*3);
console.log(mapped);



let grt=array.map(n=> n>3);
console.log(grt); */


/* let price=[100,200,300,400];

let p=price.map(p=>p+100);
console.log(p); */

// let person=["pravin","naveen","mukesh","rahul"];

// let p=person.map(p=>"Mr."+p);
// console.log(p);



// let array=[1,2,3,4,5,6,7,8,9];
// let filter=array.filter(num => num%2===0);
// console.log(filter); 


// const students = [
//     { name: "Arun", age: 20, grade: "A" },
//     { name: "Priya", age: 19, grade: "B" },
//     { name: "Vikram", age: 21, grade: "A+" },
//     { name: "Sara", age: 18, grade: "C" }
// ];

// let Name=students.map(n=>n.name);
// console.log(Name);

// let student=[
//     { name: "Arun", mark:45 },
//     { name: "Priya", mark:67 },
//     { name: "Vikram", mark:89 },
//     { name: "Sara", mark:72 }
// ]

// let mrk=student.filter(n=>n.mark>50).map(n=>n.name);
// console.log(mrk);


// let person={
//     name:"pravin",
//     age:24,
//     city:"pune"
// }

// for(let k in person){
//     console.log(k,person[k]);
// }


// let num=[10,20,30,40,50];

// let value=num.reduce((s,c)=>s-c,0);
// console.log(value);



let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
let num3=[11,12,13,14,15];

let c=[...num1,...num2,...num3];
console.log(c);