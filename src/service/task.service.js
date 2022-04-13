import { TaskRepository } from '../repository'
import { TaskValidator } from '../validators'
import { TaskMapper } from '../mappers'
import { TaskTimeService } from '.'

export function TaskService() {
  const taskRepository = TaskRepository()
  const taskValidator = TaskValidator()
  const taskMapper = TaskMapper()
  const taskTimeService = TaskTimeService()

  async function getAllTasksByUser(userId) {
    try {
      return await taskRepository.getAllTasksByUser(userId)
    } catch (error) {
      throw error
    }
  }

  async function createTask(taskRequest) {
    try {
      taskValidator.validateCreateTask(taskRequest)

      const taskEntity = taskMapper.fromCreateTaskRequestToTask(taskRequest)

      const createdTask = await taskRepository.createTask(taskEntity)
      taskTimeService.createTaskTime(taskRequest, createdTask.insertId)
    } catch (error) {
      throw error
    }
  }

  return {
    getAllTasksByUser,
    createTask,
  }
}
