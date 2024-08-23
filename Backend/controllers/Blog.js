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

        // Find the blog to update
        const blogToUpdate = await Blgomodel.findById(blogId);
        if (!blogToUpdate) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        // Update fields if they are provided
        blogToUpdate.title = title || blogToUpdate.title;
        blogToUpdate.desc = desc || blogToUpdate.desc;

        // Only update the image if a new one is uploaded
        if (req.file) {
            blogToUpdate.image = req.file.filename;
        }

        await blogToUpdate.save();
        res.status(200).json({ success: true, message: 'Blog updated successfully', blog: blogToUpdate });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


export { Create, update };
