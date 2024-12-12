import express from "express";
import fileDb from '../fileDB';
import {imagesUpload} from '../multer';


const commentRouter = express.Router();


commentRouter.get("/", async (req, res)=>{
  const comments = await fileDb.getData();

  res.status(200).send(comments)
})

commentRouter.post("/", imagesUpload.single("image"), async (req, res)=>{
  if(!req.body.message){
    res.status(400).send({error:"message should not be empty"});
  }

  const newComment = {
    author: req.body.author ? req.body.author : "Anonymous",
    message: req.body.message,
    image:req.file ? "images" + req.file.filename : null
  }
  const savedComment =  await fileDb.addComment(newComment);
  res.status(200).send(savedComment);
})

export default commentRouter