import express from 'express'
import { AddComment } from '../controllers/Comments.js'

const CommentRoutes=express.Router()

CommentRoutes.post('/addcomment',AddComment)

export default CommentRoutes