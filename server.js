require('dotenv').config()
const express =require('express');
const Routes=require('./routes/route')

const mongoose=require('mongoose')

const app =express()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
}) 
//route
app.use('/api/route',Routes)

//connect db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=> {
            console.log(' connect db &listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
})
    
/*
app.listen(process.env.PORT,()=> {
    console.log('listening on port',process.env.PORT);
})*/

