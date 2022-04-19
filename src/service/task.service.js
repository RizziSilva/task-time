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
    return await taskRepository.getAllTasksByUser(userId)
  }

  async function createTask(taskRequest) {
    taskValidator.validateCreateTask(taskRequest)

    const taskEntity = taskMapper.fromCreateTaskRequestToTask(taskRequest)

    const createdTask = await taskRepository.createTask(taskEntity)
    taskTimeService.createTaskTime(taskRequest, createdTask.insertId)
  }

  async function updateTask(updateTaskRequest, taskId) {
    taskValidator.validateUpdateTask(updateTaskRequest, taskId)
    const task = await getTaskById(taskId)

    if (!task.length) throw new Error('Task não encontrada.')

    const updatetask = taskMapper.fromUpdateTaskRequestToTask(
      task[0],
      updateTaskRequest,
    )

    await taskRepository.updateTask(updatetask, taskId)
  }

  async function getTaskById(taskId) {
    return taskRepository.getTaskById(taskId)
  }

  return {
    getAllTasksByUser,
    createTask,
    updateTask,
    getTaskById,
  }
}
