const a=0;
let b=10;
var c=90;

async function ca(){
   try{
      let data=await fetch("https://jsonplaceholder.typicode.com/posts");
      let ff=await data.json();
      console.log(ff);
   }catch{
      console.log("failed");
   }
   
}

ca().then(()=>console.log("sucess"));