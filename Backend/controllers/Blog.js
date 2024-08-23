import Blgomodel from "../models/Blog.js";


const Create=async(req,res)=>{
    try {
        const {title,desc}=req.body
        const imagePath = req.file.filename;
        const CreateBlog=new Blgomodel({
            title,desc,image:imagePath
        })
    await CreateBlog.save()
    res.status(201).json({ success:true, message: 'Blog Created Successfully',blog:CreateBlog});
    } catch (error) {
        console.log(error)
    res.status(500).json({ success:false, message: 'internal server '});

    }
}
const update = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const blogId = req.params.id;

        const blogToUpdate = await Blgomodel.findById(blogId);
        if (!blogToUpdate) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        if (title) blogToUpdate.title = title;
        if (desc) blogToUpdate.desc = desc;
        if (req.file) blogToUpdate.image = req.file.filename;

        await blogToUpdate.save();
        res.status(200).json({ success: true, message: 'Blog updated successfully', blog: blogToUpdate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const GetPosts=async(req,res)=>{
    try {
        const posts= await Blgomodel.find()
       
        if (!posts) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        res.status(200).json({ success: true,  posts });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const DeleteBlog=async(req,res)=>{
    try {
        const postid=req.params.id
        const posts= await Blgomodel.findById(postid)
       
        if (!posts) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        const deletepost=await Blgomodel.findByIdAndDelete(postid)
        res.status(200).json({ success: true, message:"Post Delete Successfully",  post:deletepost });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { Create, update,GetPosts,DeleteBlog };
