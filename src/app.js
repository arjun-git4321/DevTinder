const express=require("express");

const app=express();

app.use("/test", (req, res)=>{
    res.send("second app ");
})
app.use("/", (req, res)=>{
    res.send("first app ");

})



app.listen(3000,()=>{
    console.log("app running");
})