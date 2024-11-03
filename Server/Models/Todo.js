const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    task:String,
    timestamp: { type: Date, default: Date.now }
})

const TodoModel=mongoose.model("todos",TodoSchema)
module.exports=TodoModel
