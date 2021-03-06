import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { TaskTimeService } from '../service'

export function TaskTimeController() {
  const taskTimeController = Router()
  const taskTimeService = TaskTimeService()

  taskTimeController.post('/task-time/create', async (req, res, next) => {
    try {
      const taskTimeRequest = req.body

      const result = await taskTimeService.createTaskTime(
        taskTimeRequest,
        taskTimeRequest.idTask,
      )

      res.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  })

  taskTimeController.put('/task-time/:idTaskTime', async (req, res, next) => {
    try {
      const taskTimeRequest = req.body
      const { idTaskTime } = req.params

      await taskTimeService.updateTaskTime(taskTimeRequest, idTaskTime)

      res.sendStatus(StatusCodes.OK)
    } catch (error) {
      next(error)
    }
  })

  taskTimeController.delete(
    '/task-time/:idTaskTime',
    async (req, res, next) => {
      try {
        const { idTaskTime } = req.params

        await taskTimeService.deleteTaskTime(idTaskTime)

        res.sendStatus(StatusCodes.OK)
      } catch (error) {
        next(error)
      }
    },
  )

  return { taskTimeController }
}
