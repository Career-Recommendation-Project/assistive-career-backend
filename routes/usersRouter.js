import express from "express";
import {data} from '../data/UsersData.js'
import expressAsyncHandler from "express-async-handler"
import authModel from "../models/authModel.js";
import {isAdmin,requireAuth}  from "../middleware/authMiddleware.js";

const usersRouter = express.Router();



// create all the mentors
usersRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
  // const createdUsers = await authModel.remove({});
  const createdUsers = await authModel.insertMany(data.mentorUsers)
  res.send({createdUsers})
}))


//get all mentor
usersRouter.get("/",  expressAsyncHandler(async(req, res) => {
    const user = await authModel.find({role:"Mentor"});
    if(user){
      res.send(user)
    
    }else{
      res.status(404).send({message:"User Not found"})
    }
}));


//get individual users or mentor
usersRouter.get("/:id",expressAsyncHandler(async(req, res) => {
  const user = await authModel.findById(req.params.id)
  if(user){
    res.send(user)
 }else{
     res.status(404).send({message:"user Not Found"})
  }
}));


//verifying a mentor
usersRouter.put('/:id', requireAuth, isAdmin, async (req, res) => {
  const mentorId = req.params.id;
  const mentor = await authModel.findById(mentorId);
  if (mentor) {
    const updatedMentor =await authModel.updateOne({ _id: mentorId }, { mentorVerified: true });
    
    if (updatedMentor) {
      return res
        .status(200)
        .send({ message: 'Mentor Updated', data: updatedMentor });
       
    }
    console.log(mentor)
  }
  return res.status(500).send({ error: ' Error in Updating Product.' });
 
});


//deleting individual users or mentor
usersRouter.delete('/:id', requireAuth, isAdmin, async (req, res) => {
  const deletedMentor = await  authModel.findById(req.params.id);
  if (deletedMentor) {
   const mentorRemoved= await deletedMentor.remove();
   res.send({ message:mentorRemoved });
  } else {
    res.status(404).send({error:'Error in Deletion.'});
  }
});


//create all the users
// usersRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
//       // await authModel.remove({});
//   const createdUsers = await authModel.insertMany(data.users)
//   res.send({createdUsers})
// }))

//get all the users
// usersRouter.get("/",  expressAsyncHandler(async(req, res) => {
//     const users=await authModel.find({});
//     res.send(courses)
// }));


//get individual user
// usersRouter.get("/:id",expressAsyncHandler(async(req, res) => {
//   const user = await authModel.findById(req.params.id)
//   if(user){
//     res.send(user)
//   }else{
//     res.status(404).send({message:"user Not Found"})
//   }
// }));

export default usersRouter;
