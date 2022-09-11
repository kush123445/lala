const express=require("express");
const bodyparser=require("body-parser");


const app=express();
app.use(bodyparser.json());


app.get("/home",(req,res)=>{
console.log("print...");
res.send("radhe");

})


app.post("/lala",(req,res)=>{
    
    console.log(req.body.name);
    res.send(req.body.name);
    ///////////
    
    })
    




app.listen(5000,()=>{
    console.log("running......")
})
