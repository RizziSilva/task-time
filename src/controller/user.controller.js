import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { UserService } from '../service'

export function UserController() {
  const taskTimeController = Router()
  const userService = UserService()

  taskTimeController.post('/user/create', async (req, res, next) => {
    try {
      const userRequest = req.body

      await userService.createUser(userRequest)

      res.sendStatus(StatusCodes.OK)
    } catch (error) {
      next(error)
    }
  })

  return { taskTimeController }
}
