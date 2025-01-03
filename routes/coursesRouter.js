import express from "express";
import {data} from '../data/CourseData.js'
import expressAsyncHandler from "express-async-handler"
import courseModel from "../models/courseModel.js";

const coursesRouter = express.Router();


// get all the courses
coursesRouter.get("/",  expressAsyncHandler(async(req, res) => {
    const courses=await courseModel.find({});
    res.send(courses)
}));


// create all the courses
coursesRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
  const createdCourse = await courseModel.insertMany(data.courses)
  res.send({createdCourse})
}))

//get all the courses
// coursesRouter.get("/",  expressAsyncHandler(async(req, res) => {
//     res.send(data.courses)
// }));


//get individual courses
// coursesRouter.get("/:id",expressAsyncHandler(async(req, res) => {
//   const course = data.courses.find((x)=>x._id===req.params.id)
//   if(course){
//     res.send(course)
//   }else{
//     res.status(404).send({message:"course Not Found"})
//   }
// }));






// get individual courses
coursesRouter.get("/:id",expressAsyncHandler(async(req, res) => {
  const course = await courseModel.findById(req.params.id)
  if(course){
    res.send(course)
  }else{
    res.status(404).send({message:"course Not Found"})
  }
}));

export default coursesRouter;
