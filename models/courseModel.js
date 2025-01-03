import mongoose from 'mongoose'


const courseSchema = new mongoose.Schema({
  
    title:{   
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },

},{timestamps:true})


export default mongoose.model("courses",courseSchema)