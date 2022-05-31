import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { TaskService } from '../service'

export function TaskController() {
  const taskController = Router()
  const taskService = TaskService()

  taskController.post('/task/create', async (req, res, next) => {
    try {
      const taskRequest = req.body
      const result = await taskService.createTask(taskRequest)

      res.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  })

  taskController.put('/task/:taskId', async (req, res, next) => {
    try {
      const taskRequest = req.body
      const { taskId } = req.params

      await taskService.updateTask(taskRequest, taskId)

      res.sendStatus(StatusCodes.OK)
    } catch (error) {
      next(error)
    }
  })

  taskController.get('/task/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params
      const { page, limit } = req.query
      const result = await taskService.getAllTasksByUserPaginated({
        userId,
        page,
        limit,
      })

      res.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  })

  return { taskController }
}
