import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { UserService } from '../service'

export function UserController() {
  const userController = Router()
  const userService = UserService()

  userController.post('/user/create', async (req, res, next) => {
    try {
      const userRequest = req.body

      await userService.createUser(userRequest)

      res.sendStatus(StatusCodes.OK)
    } catch (error) {
      next(error)
    }
  })

  userController.get('/user/login', async (req, res, next) => {
    try {
      const userLoginRequest = req.params
      const foundUser = await userService
    } catch (error) {
      next(error)
    }
  })

  return { userController }
}
