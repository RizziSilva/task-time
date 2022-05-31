import { TaskRepository } from '../repository'
import { TaskValidator } from '../validators'
import { TaskMapper } from '../mappers'
import { Pagination } from '../utils'
import { TaskTimeService } from '.'

export function TaskService() {
  const taskRepository = TaskRepository()
  const taskValidator = TaskValidator()
  const taskMapper = TaskMapper()
  const taskTimeService = TaskTimeService()
  const paginationUtil = Pagination()

  async function getAllTasksByUserPaginated(request) {
    const { userId, page, limit } = request

    taskValidator.validateGetTasks(userId)

    const offSet = paginationUtil.getOffSet(page, limit)
    const result = await taskRepository.getAllTasksByUser(userId, offSet, limit)
    const totalNumberOfTaks = await taskRepository.countAllTasksByUserId(userId)
    const response = paginationUtil.buildResponseWithPaginationInfo(
      result,
      page,
      limit,
      totalNumberOfTaks[0].quantityOfTasks,
    )

    return response
  }

  async function createTask(taskRequest) {
    taskValidator.validateCreateTask(taskRequest)

    const taskEntity = taskMapper.fromCreateTaskRequestToTask(taskRequest)

    const createdTask = await taskRepository.createTask(taskEntity)
    taskTimeService.createTaskTime(taskRequest, createdTask.insertId)

    return createdTask.insertId
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
    getAllTasksByUserPaginated,
    createTask,
    updateTask,
    getTaskById,
  }
}
