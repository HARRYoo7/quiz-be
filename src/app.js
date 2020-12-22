const express=require('express')
require('./db/mongoose')
const quizRouter=require('./routers/quiz')

const app=express()


// app.use((req,res,next)=>{
//     res.status(503).send('Site is under maintenance')
// })
app.use(express.json()) //parse incoming json to object
app.use(quizRouter)



module.exports=app