import express from 'express'
import { AddComment } from '../controllers/Comments.js'
import { isLogin } from '../middleware/CheckAdmin.js'

const CommentRoutes=express.Router()

CommentRoutes.post('/addcomment',isLogin,AddComment)

export default CommentRoutes