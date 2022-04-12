import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { TaskService } from '../service'

export function TaskController() {
  const taskController = Router()
  const taskService = TaskService()

  taskController.post('/task/create', async (req, res, next) => {
    try {
      const taskRequest = req.body
      await taskService.createTask(taskRequest)

      res.sendStatus(StatusCodes.OK)
    } catch (error) {
      next(error)
    }
  })

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
