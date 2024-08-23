import express from 'express'
import { isAdmin } from '../middleware/CheckAdmin.js'
import { Dashboard } from '../controllers/Dashboard.js'

const DashboardRoutes=express.Router()

  DashboardRoutes.get('/',isAdmin,Dashboard)

export default DashboardRoutes