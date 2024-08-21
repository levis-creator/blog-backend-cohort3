let messages= [
    {
      id: 1,
      message: "Hello, this is a test message!",
      timestamp: "2024-08-20T15:32:45.123Z",
      randomUserId: "user789"
    },
    {
      id: 2,
      message: "Another random message!",
      timestamp: "2024-08-19T14:28:23.456Z",
      randomUserId: "user234"
    },
    {
      id: 3,
      message: "Sample message content.",
      timestamp: "2024-08-18T13:15:12.789Z",
      randomUserId: "user567"
    },
    {
      id: 4,
      message: "Yet another message for testing.",
      timestamp: "2024-08-17T12:04:56.234Z",
      randomUserId: "user890"
    },
    {
      id: 5,
      message: "This is a placeholder message.",
      timestamp: "2024-08-16T11:53:34.678Z",
      randomUserId: "user345"
    },
    {
      id: 6,
      message: "Here's a message example.",
      timestamp: "2024-08-15T10:42:22.345Z",
      randomUserId: "user678"
    },
    {
      id: 7,
      message: "Testing the message array.",
      timestamp: "2024-08-14T09:31:10.456Z",
      randomUserId: "user901"
    },
    {
      id: 8,
      message: "Random message for demo.",
      timestamp: "2024-08-13T08:20:05.123Z",
      randomUserId: "user012"
    },
    {
      id: 9,
      message: "Example message content.",
      timestamp: "2024-08-12T07:10:32.789Z",
      randomUserId: "user345"
    },
    {
      id: 10,
      message: "Final message in the array.",
      timestamp: "2024-08-11T06:00:22.456Z",
      randomUserId: "user678"
    }
  ];

function gettingallmessages(req, res) {
    res.json(messages)
  }

  function gettingsinglemessage(req, res) {
    const {id}=req.params
    const singleMessage=messages.filter((mess)=>mess.id==id)
    if(singleMessage.length!=0){
        res.json(singleMessage[0])
    }else{
        res.status(404).json({
            message:"message not found"
        })
    }
    }
  function sendingMessages(req, res) { 
    const{id,
        message,
        timestamp,
        randomUserId}=req.body
        messages.push({
            message,
            timestamp,
            randomUserId
        })
        res.json({
            id,
            message,
            timestamp,
            randomUserId})
   }
   function updateMessage(req, res) {
    res.json({
        message: " updating message"
    })
     }
     function deleteMessage(req, res){
        const{id}= req.params;
        messages=messages.filter((mess)=>mess.id!=id)
        res.status(200).json({
            message: "deleted successfully"
        })
     }

  module.exports={gettingallmessages, sendingMessages, updateMessage, deleteMessage, gettingsinglemessage}