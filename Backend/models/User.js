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
    },
    role:{
         type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{timestamps:true})

const UserModal=mongoose.model('User',UserSchema)

export default UserModal