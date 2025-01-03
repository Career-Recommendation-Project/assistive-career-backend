import mongoose from "mongoose";

//schema define the field and data that will be saved in the mongodb database collection
const uploadSchema = new mongoose.Schema({
  image:{
    type: String,
  },
  
},{
  timestamps:true
});


export default mongoose.model("upload", uploadSchema);