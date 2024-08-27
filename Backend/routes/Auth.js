
import express from 'express'
import { Login, Logout, Register, updateProfile } from '../controllers/Auth.js'
import { upload } from '../middleware/Multer.js'
import { isLogin } from '../middleware/CheckAdmin.js'

const AuthRoutes=express.Router()


AuthRoutes.post('/register',upload.single('profile'),Register)
AuthRoutes.post('/login',Login)
AuthRoutes.patch('/profile/:id',upload.single('profile'),isLogin,updateProfile)
AuthRoutes.post('/logout',Logout)
export default AuthRoutes