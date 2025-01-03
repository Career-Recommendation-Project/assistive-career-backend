
import express from "express";
import {chartsData} from '../data/chartsData.js'
import expressAsyncHandler from "express-async-handler"

const chartsRouter = express.Router();


chartsRouter.get("/",expressAsyncHandler((req,res)=>{
    res.json(chartsData)
  }))
  
  export default chartsRouter;