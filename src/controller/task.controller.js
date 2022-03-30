import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { TaskService } from '../service'

export function TaskController() {
  const taskController = Router()
  const taskService = TaskService()

  taskController.get('/task/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params
      const result = await taskService.getAllTasksByUser(userId)

      result.length
        ? res.status(StatusCodes.OK).json(result)
        : res.status(StatusCodes.NO_CONTENT)
    } catch (error) {
      next(error)
    }
  })

  return { taskController }
}
