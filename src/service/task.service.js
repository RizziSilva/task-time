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

  async function updateTask(updateTaskRequest, taskId) {
    try {
      taskValidator.validateUpdateTask(updateTaskRequest, taskId)
      const task = await getTaskById(taskId)

      if (!task.length) throw new Error('Task não encontrada.')

      const updatetask = taskMapper.fromUpdateTaskRequestToTask(
        task[0],
        updateTaskRequest,
      )

      await taskRepository.updateTask(updatetask, taskId)
    } catch (error) {
      throw error
    }
  }

  async function getTaskById(taskId) {
    try {
      return taskRepository.getTaskById(taskId)
    } catch (error) {
      throw error
    }
  }

  return {
    getAllTasksByUser,
    createTask,
    updateTask,
    getTaskById,
  }
}
