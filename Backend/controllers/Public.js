import Blgomodel from "../models/Blog.js"


const GetSinglePost=async(req,res)=>{
    try {
        const postId=req.params.id

        const Post= await Blgomodel.findById(postId)
        .populate({
            path:"comments",
            populate:{
                path:"userId"
            }
        })

        if (!Post) {
            return res.status(404).json({ success: false, message: 'Blog post not found' });

        }
        res.status(200).json({success:true,Post})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export {GetSinglePost}