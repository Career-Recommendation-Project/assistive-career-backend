import  express from "express";
import colors  from "colors";
import dotenv  from "dotenv";
import cors  from "cors";
import morgan  from "morgan";
import cookieParser  from "cookie-parser";
import fileUpload from "express-fileupload"
import path from 'path';
import multer from 'multer';
import fs from "fs";

const app = express();


import {requireAuth}  from "./middleware/authMiddleware.js";
// import uploadModel from "./models/uploadModel.js"

import authRoute  from "./routes/authRoute.js";
import orderRouter from "./routes/orderRouter.js";
import coursesRouter from "./routes/coursesRouter.js";
import chartsRouter from "./routes/chartsRouter.js";
import usersRouter from "./routes/usersRouter.js";

import connectDB  from "./db.js";


dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(fileUpload())
app.use(morgan("dev"));
app.use(cors());
const __dirname = path.resolve();



app.use("/api/auth",authRoute);
app.use("/api/charts",chartsRouter);
app.use("/api/courses",coursesRouter);
app.use("/api/users",usersRouter);
app.use("/api/orders",requireAuth,orderRouter);


const MimeTypes =["application/pdf","application/msword"]
const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./Client-Side/public/uploads")
  },
  fileFilter:(req,file,cb)=>{
    cb(null,MimeTypes.includes(file.mimetypes))
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})
//configure the storage engine
const upload=multer({storage:storage})



app.post('/uploadProfileImage',upload.single("file"),async(req, res) => {
  const fileName = req.file && req.file !== null ? req.file.filename : null;
  
  
  return res.json({fileName:fileName,filePath:`/uploads/${fileName}`})
  
  
//  if(req.files===null){
//    return res.status(400).json({msg:'No file uploaded'});
//  }
//  const file=req.files.file;
 
//  file.mv(`${__dirname}/client-side/public/uploads/${file.name}`,err=>{
//    if(err){
//      console.error(err);
//      return res.status(500).send(err)
//    }
//    return res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
//  });
});



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"Client-Side/build")));
  
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Client-Side","build","index.html"))
  })
}else{
  app.get("/",(req,res)=>{
    res.send("Api running")
  })
}


app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})

const PORT = process.env.PORT || 5000;
const HOSTNAME = "0.0.0.0";

//Always the port must be the first parameter
app.listen(PORT, HOSTNAME, () => {
  console.log(
    `Express server is running in the ${process.env.NODE_ENV} mode at http://${HOSTNAME}:${PORT} 🚀`
      .yellow.bold
  );
});