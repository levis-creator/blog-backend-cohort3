const express= require ("express");
const { gettingallmessages, sendingMessages, updateMessage, deleteMessage, gettingsinglemessage }=require("../controllers/chats.controller")
const router= express.Router();

// chat routes
// reads
router.get("/", gettingallmessages)
// reading single data
router.get("/:id", gettingsinglemessage)
// creates data
router.post("/", sendingMessages)
// updating data
router.patch('/', updateMessage)
// deleting data
router.delete("/:id",deleteMessage)

module.exports=router;