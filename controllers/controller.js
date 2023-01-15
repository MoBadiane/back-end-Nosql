const Model=require('../models/model')
const mongoose=require('mongoose')
//get all

const getStats=async(req,res)=>{
    const stats=await Model.find({}).sort({createAt:-1})
    res.status(200).json(stats)
}
/*
//get country
const getStatCountry=async(req,res)=>{
    const {byDay}=req.params
    const model=await Model.find({visitsByDay:byDay})
    
   if(!mongoose.Types.ObjectId.isValid(visitsByDay)){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    if(!model){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    res.status(200).json(model)
}
*/
//get single 
const getStat=async(req,res)=>{ 
    const {id}=req.params
    const model=await Model.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    
    if(!model){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    res.status(200).json(model)
}
//create 

const createStat=async(req,res)=>{
    const{name,country,city,visitsByDay,visitsByMonth}=req.body
    try {
        const model= await Model.create({
            name,country,city,visitsByDay,visitsByMonth
        })
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
//delete route
const deleteStat=async(req,res)=>{
    const{id}=req.params
    const model=await Model.findOneAndDelete({_id:id})
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }

    if(!model){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    res.status(200).json(model)
}
//update route
const updateStat=async(req,res)=>{
    const{id}=req.params
    const model=await Model.findOneAndUpdate({_id:id} ,{
        ...req.body
    })
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }

    if(!model){
        return res.status(404).json({error:"Monument inexistant !!!"})
    }
    res.status(200).json(model)
}
module.exports={
    getStats,getStat,createStat,updateStat,deleteStat
}