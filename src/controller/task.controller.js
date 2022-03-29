import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

export function TaskController() {
  const taskController = Router()

  taskController.get('/task', async (req, res, next) => {
    res.status(StatusCodes.OK).json({ data: 'Foi' })
  })

  return { taskController }
}
