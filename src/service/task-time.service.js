import { TaskTimeValidator } from '../validators'
import { TaskTimeMapper } from '../mappers'
import { TaskTimeRepository } from '../repository'

export function TaskTimeService() {
  const taskTimeValidator = TaskTimeValidator()
  const taskTimeMapper = TaskTimeMapper()
  const taskTimeRepository = TaskTimeRepository()

  async function createTaskTime(taskTimeRequest, idTask) {
    try {
      taskTimeValidator.validateCreateTaskTime(taskTimeRequest, idTask)
      const taskTime =
        taskTimeMapper.fromCreateTaskTimeRequestToTaskTime(taskTimeRequest)

      await taskTimeRepository.createTaskTime(taskTime, idTask)
    } catch (error) {
      throw error
    }
  }

  return { createTaskTime }
}
