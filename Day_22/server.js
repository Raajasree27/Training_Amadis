const express = require("express");
const sequelize = require("./index");
const User=require('./models/user')

const app =express();
const port=3000;

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL successfully!');

    await sequelize.sync({ force: false });
    console.log('✅ Models synced to the database (table created)');

  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }})();

  app.get('/users',async (req,res)=>{
    try{
        const users= await User.findAll();
        res.json(users);
    }catch(err){
        res.json({error:"Failed to catch the users"})
    }
  })

  app.post("/users", async (req,res)=>{
    try{
        const{name,email,age}=req.body;
        const newUser=await User.create({name,email,age})
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({error:"Failed to create the user",details:err.message})
    }
  })

  app.listen(port,()=>{
    console.log("Server is running")
  })