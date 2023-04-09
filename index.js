const express=require("express")
const bodyparser=require("body-parser")
require("./src/conn");
const user=require("./models/user")


const app=express();

app.use(bodyparser.json())

app.get("/get",async(req,res)=>{
   // console.log(req.query.num)
   
    const var1=await user.find({name:req.query.name});
    console.log(var1)
   if(var1.length==0){

    console.log("not found any data");
    res.send("not found data");
   }
   else{
    console.log("found  data");
    res.send(var1);

   }

    
})

app.post("/post",async(req,res)=>{

    try{
    console.log(req.body)

     const User= new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      })

      const insertdata=await User.save().then((insertdata)=>{
        console.log(insertdata);
        res.send(insertdata);
      }).catch((e)=>{
        console.log(e);
        res.send("not inserted")
      })
    }
    catch(e){
        console.log(e);
        res.send("not inserted")
    }
    
   
})

app.delete("/delete/:num",(req,res)=>{
    console.log(req.params.num)

    user.findOneAndRemove({"_id":req.params.num}).then((deletedata)=>{

        if(deletedata!=null){
            console.log("deleted")
            res.send(deletedata);
        }
        else{
            console.log("not deleted")
            res.send("data not exist");
        }
    }).catch((e)=>{
        console.log("not deleted");
        res.send("not deleted")
    })
    
    
})

app.put("/put",async(req,res)=>{
    console.log(req.body)

   const findUser= await user.find({name:req.body.name})
   console.log(findUser)

   if(findUser.length==0){
    console.log("data not exists");
    res.send("not found");
   }
   else{

    console.log(findUser);
    const var1=await user.updateMany({name:req.body.name}, {$set:{"email":"india@gmail.com"}})
    if(var1.length==0){
        console.log("not updated 92");
        res.send("not update 92")
    }
    else{
        console.log(" updated 96");
        res.send(var1)
    }
    

   }
    
    
})



app.listen(8080, ()=>{
    console.log(" server running ... at 8080 ")
})