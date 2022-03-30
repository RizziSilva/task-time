import { TaskRepository } from '../repository'

export function TaskService() {
  const taskRepository = TaskRepository()

  async function getAllTasksByUser(userId) {
    try {
      return await taskRepository.getAllTasksByUser(userId)
    } catch (error) {
      throw error
    }
  }

  return {
    getAllTasksByUser,
  }
}
