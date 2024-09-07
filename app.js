//  console.log("one");

// function hello(){
//     console.log("Digi{Coders}");
// }
// setTimeout(hello,2000);


// console.log("one")
// setTimeout(()=>{
//     console.log("digicoders");
// },5000);
// console.log("two");

//  a callback  function is a passed as an argument to another function;

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);

// }
// calculator(5,7,sum)

// function cal(c,d){
//     console.log(c*d);
// }
// function  calu(c,d,calucallback){
//     calucallback(c,d)
 
// }
// calu(10,10,cal)





//Promises:- is for 'eventual' completation of task it is an object in js it os a solution of callback hell.


// let Promises=new Promise((resolve,reject)=>
//     {
//         console.log("i am Promise");
//     });

// const getPromise=()=>{
//     return new Promise((resolve ,reject)=>{
//         console.log("i am promise");
//         // resolve("success");
//         reject("uncaught Error");
//     });
// }; 
//  let promise=getPromise();
//  promise.then((res)=>{
//     console.log("Promise Fullfileees",res);
//  });
//  promise.catch((error)=>{
//     console.log("rejected",error)
//  })

//Async-Await :- async function always returns is a promise


function api(){
    return new Promise((resolve)=>{
        setTimeout(() => {
             const names=["Raaam","Ram","Shyam","Bhawna"];
             const randomnames=names[Math.floor(Math.random()*names.length)];
            resolve(randomnames);
        },2000);
      
    });
}
 async function getweatherdata(){
    for(let i=0;i<5;i++){
     const name =await  api();
     console.log(`Name:${name}`);
}
 }
getweatherdata();






