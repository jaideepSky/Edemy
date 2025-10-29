import express from 'express'
import  { updateRoleToEducator,addCourse } from '../controllers/educator.controller.js'
import upload from '../config/multer.js'
import { protectEducato } from '../middlewares/auth.middleware.js'

const educatorRouter = express.Router()
 
// Add Educator Role
educatorRouter.get('/update-role' , updateRoleToEducator)
educatorRouter.post('/add-course' , upload.single('image'), protectEducato, addCourse)
export default educatorRouter