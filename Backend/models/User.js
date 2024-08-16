import mongoose from "mongoose";
const UserSchema= new mongoose.Schema({
    FullName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    profile:{
        type:String,
    }
},{timestamps:true})

const UserModal=mongoose.model('User',UserSchema)