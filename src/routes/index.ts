import express, { Router } from 'express'
const router: Router = express.Router()

import userController from '../controllers/user'
const user = new userController()

router.route('/user').get(user.getManyUser)

export default router
