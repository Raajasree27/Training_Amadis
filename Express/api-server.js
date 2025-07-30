const express =require('express')
const app =express();
const port=8080;

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })
app.use(express.json());

let items=[{id:1, name:'item-one',add:"jkndjdsn"},{id:2,name:'item-two',add:"jdnsjdnj"}];

app.get('/items',(req,res)=>{
    res.json(items)
})
//get the item one by one
// app.get('/items/:id',(req,res)=>{
//     // console.log(req.params);
//     const id=parseInt(req.params.id); //parse in integer
//     const item=items.find(i=>i.id===id);
//     if(item){
//         res.json(item);
//     }
//     else{
//         res.status(404).json({message:'Item not found'})
//     }
// })


    app.post('/items', (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(404).json({ message: 'Name is required' });
    }

    const newItem = {
        id: items.length + 1,
        name
    };

    items.push(newItem);
    res.status(201).json(newItem);

    // res.send("hai");
});

app.put('/items/:id', (req, res) => {
    const { name,add } = req.body;
    const{id}=req.params;

    const item=items.find(i=>i.id===parseInt(id))

    if(!item){
        return res.status(404).json({message:"Id is not found"})
    }
    if (!name|| !add) {
        return res.status(404).json({ message: 'Name is required' });
    }
    
    item.name=name;
    item.add=add;
    res.json(item); 

    // res.send("hai");
});

app.patch('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const item = items.find(i => i.id === parseInt(id));

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    if (name !== undefined) {
        item.name = name;
    }

    res.json(item);

});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    const deletedItem = items.splice(index, 1); // remove item from array

    res.json({ message: 'Item deleted successfully', item: deletedItem[0] });
});







app.listen(port,()=>{
    console.log(`Server is running on localhost:${port} `)
})


// var exp=require("express");
// var main=exp()

// main.get("/",(req,res)=>
// {
//     res.send("got");
// })

// main.post("/ho",(req,res)=>
// {
//     res.send("hai");
// });

// main.listen(8080);