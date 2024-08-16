
import express from 'express'
import { Login, Register } from '../controllers/Auth.js'
const AuthRoutes=express.Router()


AuthRoutes.post('/register',Register)
AuthRoutes.post('/login',Login)
export default AuthRoutes