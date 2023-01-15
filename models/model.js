const mongoose=require('mongoose')
const Schema=mongoose.Schema
const modelSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    visitsByDay:{
        type:Number,
        required:true
    },
    visitsByMonth:{
        type:Number,
        required:true
    }

},)

module.exports=mongoose.model('model',modelSchema)

//{timestamps:true}