import { TaskTimeValidator } from '../validators'
import { TaskTimeMapper } from '../mappers'
import { TaskTimeRepository } from '../repository'

export function TaskTimeService() {
  const taskTimeValidator = TaskTimeValidator()
  const taskTimeMapper = TaskTimeMapper()
  const taskTimeRepository = TaskTimeRepository()

  async function createTaskTime(taskTimeRequest, idTask) {
    taskTimeValidator.validateCreateTaskTime(taskTimeRequest, idTask)
    const taskTime =
      taskTimeMapper.fromCreateTaskTimeRequestToTaskTime(taskTimeRequest)

    await taskTimeRepository.createTaskTime(taskTime, idTask)
  }

  async function updateTaskTime(updateTaskTimeRequest, idTaskTime) {
    taskTimeValidator.validateUpdateTaskTime(updateTaskTimeRequest, idTaskTime)

    const taskTime = taskTimeMapper.fromUpdateTaskTimeRequestToTaskTime(
      updateTaskTimeRequest,
    )

    await taskTimeRepository.updateTaskTime(taskTime, idTaskTime)
  }

  return { createTaskTime, updateTaskTime }
}
