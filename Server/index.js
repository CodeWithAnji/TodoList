const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const TodoModel=require('./Models/Todo')

mongoose.connect('mongodb://127.0.0.1:27017/test')

const app=express()
app.use(cors())
app.use(express.json())


app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task   
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3002,()=>{
    console.log("Server is running");
})