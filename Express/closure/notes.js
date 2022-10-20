// const ca=function (resolve,reject){

//     // Synchronus promise
//     let a=0;
//     const b=90;
//     var c=30;

//     let d=Math.random();
//     for(let i=0;i<10;i++){
//        console.log(i);
//        a=a+i;
//     }

//     if(d>0.5){
//        resolve();
//     }else{
//        reject();
//     }
    
// }
// const aj=new Promise(ca)

// aj.then(()=>{
//     console.log("correct");
// }).catch(()=>{
//     console.log("Incorrect");
// })

// console.log("bye bye");

//-------------------------------------------------------------------------------------------------

const ca=function (resolve,reject){

    // asynchronus promise
    let a=0;
    const b=90;
    var c=30;

    let d=Math.random();
    
    setTimeout(()=>{
        console.log("Hello i am  callback function of setTimeOut");
        d=Math.random();
        console.log(d);
         if(d>0.7){
            resolve("yellow");
         }else if (d>0.3 && d<0.7){
            resolve("blue");
         }else if (d<0.3 && d>0.1){
            resolve("pink");
         }else{
            reject();
         }
    },8000);


}

const aj=new Promise(ca)

aj.then((aa)=>{
    document.body.style.backgroundColor = aa;
}).catch((err)=>{
    document.body.style.backgroundColor = "black";
})

console.log("bye bye");

//---------------------------------------------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/albums").then((aa)=>{
   return aa.json();
}).then((aa)=>{
   console.log(1);
   console.log(aa);
}).catch((err)=>{
   console.log(err)
})


fetch("https://jsonplaceholder.typicode.com/todos").then((aa)=>{
   return aa.json();
}).then((aa)=>{
   console.log(2);
   console.log(aa);
}).catch((err)=>{
   console.log(err)
})

fetch("https://jsonplaceholder.typicode.com/posts").then((aa)=>{
   return aa.json();
}).then((aa)=>{
   console.log(2);
   console.log(aa);
}).catch((err)=>{
   console.log(err)
})

//--------------------------------------------------------------------------------------------
//
const a=0;
let b=10;
var c=90;

async function cka(){
   try{
      let data=await fetch("https://jsonplaceholder.typicode.com/posts");
      let ff=await data.json();
      console.log(ff);
   }catch{
      console.log("failed");
   }
   
}

cka().then(()=>console.log("sucess"));

//---------------------------------------------------------------------------------------------
//this will help u understand the async working under the hood
const aa=0;
let bb=10;
var cc=90;

console.log(1);
async function ckka(){
   console.log(5);
   try{
      console.log(6);
      let data=await (new Promise((resolve)=>{
         console.log(11);
         setTimeout(()=>{console.log("I am Callback of SetimeOut"); resolve("Sandeep");},8000);
        // resolve("Sandeep");

      }))
      console.log(7);
      console.log(data);
      let data2=await (new Promise((resolve)=>{
         console.log(12);
         setTimeout(()=>{console.log("I am Callback of SetimeOut"); resolve("Sandeep2");},8000);
         //resolve("Sandeep2");
      }))
      console.log(8);
      console.log(data2);
      console.log(9);
   }catch{
      console.log("failed");
   }
   
   console.log(10);
}
console.log(2);
ckka().then(()=>console.log("sucess"));
console.log(3);
console.log(4);