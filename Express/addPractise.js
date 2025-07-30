const express = require('express');
const app = express();

app.use(express.json());
let messages=[]

// // Run this for any method on /hello
// app.all('/hello', (req, res, next) => {
//   console.log(`Request method: ${req.method}`);
//   next(); // Pass to the specific method handler
// });

// // Handle GET request
// app.get('/hello', (req, res) => {
//   res.send('GET Hello');
// });

// // Handle POST request
// app.post('/hello', (req, res) => {
//   res.send('POST Hello');
// });

app.all('/hello',(req,res,next)=>{
    console.log(`[${new Date().toISOString()}]${req.method} to /hello`)
    next()
})

app.get('/hello',(req,res)=>{
    res.json({messages})
})

app.post('/hello',(req,res)=>{
    const text=req.body;
    if(!text){
        return res.status(404).json({message:"text is required"})
    }
    const newMsg={id:messages.length +1,text}
    messages.push(newMsg);
    res.status(200).json(newMsg)
})

app.use('/hello',(req,res)=>{
    return res.status(405).json({message: `Method ${req.method} not allowed on /hello`})
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
