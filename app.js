const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json([{id:1, name:"Haris", age:23},{id:2, name:"Hassan", age:21}])
});

app.listen(5500,()=>{
    console.log("app is listening on port 5500")
})