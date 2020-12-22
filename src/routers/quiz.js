const express=require('express')
const Quiz=require('../models/quiz')
const router=express.Router()

router.post('/quizs',async(req,res)=>{
    const quiz=new Quiz({
        ...req.body
    })
    try{
        await quiz.save()
        res.status(201).send(quiz)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/quizs',async (req,res)=>{
    try{
        const quizs=await Quiz.find({})
        res.status(200).send(quizs)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/quizs/:id',async (req,res)=>{
    const _id=req.params.id

    try{
        const quiz=await Quiz.findOne({_id:_id})
        if(!quiz){
            return res.status(404).send()
        }
        res.send(quiz)
    }catch(e){
        res.status(500).send(e)
    }
    
})

router.delete('/quizs/:id',async (req,res)=>{
    try{
        const quiz=await Quiz.findOneAndDelete({_id:req.params.id})
        if(!quiz){
            return res.status(404).send()
        }
        res.send(quiz)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports=router