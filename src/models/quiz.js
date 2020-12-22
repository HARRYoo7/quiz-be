const mongoose=require('mongoose')

const quizSchema=new mongoose.Schema({
    question:{
        type:String,
        trim:true,
        required:true
    },
    answer:{
        type:String,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

const Quiz=mongoose.model('Quiz',quizSchema)

module.exports=Quiz