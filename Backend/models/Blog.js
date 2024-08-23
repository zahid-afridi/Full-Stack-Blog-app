import mongoose from "mongoose";

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    }
},{
    timestamps:String
})

const Blgomodel= mongoose.model("Posts",BlogSchema)

export default Blgomodel