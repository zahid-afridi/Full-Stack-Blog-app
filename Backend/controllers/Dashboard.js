import Blgomodel from "../models/Blog.js"
import UserModal from "../models/User.js"

const Dashboard=async(req,res)=>{
    try {
        const Users= await UserModal.find()
        const Posts= await Blgomodel.find()
        // comments here 

        if (!Users && Posts) {
            return res.status(404).json({success:false,message:"Not Data Found"})
        }
   res.status(200).json({success:true,Users,Posts})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server error"})

    }
}

export {Dashboard}