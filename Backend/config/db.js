const mongoose=require("mongoose")

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/multer");
        console.log("connected to the DB")
    } catch (error) {
        console.log("error while connecting ti the db: ",error.message)
        throw error
    }
}

module.exports=connectDB