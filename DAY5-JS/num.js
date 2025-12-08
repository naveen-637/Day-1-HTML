// console.log("first");
// setTimeout(()=>{
//     console.log("second excution"),2000
// })

// console.log("third");


// setTimeout(() => {
//     console.log("hi pravin");

//     setTimeout(() => {
//         console.log("how are you");

//         setTimeout(()=>{
//             console.log("i am fine");

//             setTimeout(()=>{
//                 console.log("what about you");  

//                 setTimeout(()=>{
//                     console.log("i am also good");
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
    
// },2000);



let p=new Promise((resolve,reject)=>{
    let i=false;

    if(i){
        resolve("promise resolved");
    }else{
        reject("promise rejected");
    }
});

p.then((m)=>{
    console.log(m);
}).catch((m)=>{
    console.log(m);
})
r