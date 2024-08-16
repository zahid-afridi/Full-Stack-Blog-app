import express from 'express'
import dotenv from 'dotenv'
import AuthRoutes from './routes/Auth.js'
import DBCon from './libs/db.js'
import cors from 'cors'
dotenv.config()

const PORT=process.env.PORT || 4000
const app=express()
DBCon()
app.get('/',(req,res)=>{
    res.send('hello from server')
})
app.use(cors('*'))
app.use('/auth',AuthRoutes)

app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})
