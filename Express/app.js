const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res,next) => {                     //it's like eventLisner which stays in the background always watching the endpoint 
  console.log("Hello")
  next();
})

app.get('/kkkk', (req, res,next) => {                     //it's like eventLisner which stays in the background always watching the endpoint 
  console.log("Hello3")
  res.send("Hello3")
})

app.get('/', (req,res,next)=>{
  console.log("Hello33");
  next();
},(req,res,next) => {                     //it's like eventLisner which stays in the background always watching the endpoint 
  console.log("Hello2")
  res.send("Hello2")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})