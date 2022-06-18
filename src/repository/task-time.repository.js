import { DataBase } from '../config'

export function TaskTimeRepository() {
  const dataBase = DataBase()
  async function createTaskTime(taskTime, idTask) {
    const { createdAt, initiatedAt, endedAt, updatedAt } = taskTime
    const query =
      'INSERT INTO taskTime(idTask, createdAt, updatedAt, initiatedAt, endedAt) ' +
      'VALUES (?, ?, ?, ?, ?) '

    const params = [idTask, createdAt, updatedAt, initiatedAt, endedAt]

    return await dataBase.parameterQuery(query, params)
  }

  async function updateTaskTime(taskTime, idTaskTime) {
    const { initiatedAt, endedAt, updatedAt } = taskTime
    const query =
      'UPDATE taskTime SET endedAt = ?, updatedAt = ?, initiatedAt = ? WHERE id = ? '

    const params = [endedAt, updatedAt, initiatedAt, idTaskTime]

    await dataBase.parameterQuery(query, params)
  }

  async function deleteTaskTime(idTaskTime) {
    const query = 'DELETE FROM taskTime WHERE id = ?'
    const params = [idTaskTime]

    await dataBase.parameterQuery(query, params)
  }

  return { createTaskTime, updateTaskTime, deleteTaskTime }
}
