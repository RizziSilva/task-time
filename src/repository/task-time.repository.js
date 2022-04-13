import { DataBase } from '../config'

export function TaskTimeRepository() {
  const dataBase = DataBase()
  async function createTaskTime(taskTime, idTask) {
    try {
      const { createdAt, initiatedAt, endedAt, updatedAt } = taskTime
      const query =
        'INSERT INTO taskTime(idTask, createdAt, updatedAt, initiatedAt, endedAt) ' +
        'VALUES (?, ?, ?, ?, ?) '

      const params = [idTask, createdAt, updatedAt, initiatedAt, endedAt]

      await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  return { createTaskTime }
}
