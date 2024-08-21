const express = require("express");
const chatsroutes=require("./routes/chats.routes")
const app=express();

//local variables
const port=3000
// middlewares
// is used the body input
app.use(express.json())
//sending response
// routes
app.use("/api/chats", chatsroutes)

// establishing a port 
app.listen(port, ()=>console.log("listening to port: " +port))
