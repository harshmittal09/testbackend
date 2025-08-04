require('dotenv').config()
const express = require("express");

const app = express();


const port = process.env.port;

app.get("/login",(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>');
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
});

app.listen(process.env.port,()=>{
    console.log(`Server Started at port ${port}!!`);
})