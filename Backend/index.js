const express=require("express")
const connectDB = require("./config/db")
const cors=require("cors")
const userRouter = require("./routes/user.routes")

const app=express()

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

connectDB()
.then(()=>{
   app.listen(8080,()=>{
    console.log("Server is running on port:-8080")
   })
})
.catch((error)=>{
    console.error("error connecting to the server",error)
    process.exit(1)
})