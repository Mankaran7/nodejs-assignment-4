import express from 'express'
import studentcontroller from './controllers/StudentController.js'
import UserController from './controllers/UserController.js'
import loginController from './controllers/loginController.js'
const router=express.Router()
router.use('/students',studentcontroller)
router.use('/users',UserController)
router.use('/auth',loginController)
export default router