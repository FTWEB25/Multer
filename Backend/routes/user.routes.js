const express=require("express")
const upload = require("../config/multer"); 
const { register, getUsers } = require("../controllers/user.controllers");
const userRouter=express.Router()

userRouter.use("/images", express.static("images"));
userRouter.post("/register",upload.single('image'), register)
userRouter.get("/",getUsers)

module.exports=userRouter

