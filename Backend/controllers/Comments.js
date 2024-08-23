import Blgomodel from "../models/Blog.js";
import CommentModel from "../models/Commments.js";



const AddComment = async (req, res) => {
    try {
        const { postId, userId, comment } = req.body;

        // Create a new comment
        const newComment = new CommentModel({
            postId,
            userId,
            comment
        });

        await newComment.save();

        // Find the blog post and add the comment to it
        const blogPost = await Blgomodel.findById(postId);
        if (!blogPost) {
            return res.status(404).json({ success: false, message: 'Blog post not found' });
        }

        blogPost.comments.push(newComment._id);
        await blogPost.save();

        res.status(201).json({ success: true, message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { AddComment };
