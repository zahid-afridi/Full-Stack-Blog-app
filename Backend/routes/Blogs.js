import express from 'express'
import { Create, update } from '../controllers/Blog.js'
import { upload } from '../middleware/Multer.js'
import { isAdmin } from '../middleware/CheckAdmin.js'

const BlogRoutes= express.Router()


BlogRoutes.post('/create',isAdmin,upload.single('postimg'),Create)
BlogRoutes.patch('/update/:id',isAdmin,upload.single('postimg'),update)


export default BlogRoutes