const express = require('express');
const { default: mongoose, mongo } = require('mongoose');
const app = express();
require("./models/user")
const port= process.env.PORT || 5000

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect("mongodb+srv://adarsh:adarsh@cluster0.lnxnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb");
})

mongoose.connection.on("error",()=>{
    console.log("Error !!");
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("server running");
})