import { DataBase } from '../config'

export function TaskTimeRepository() {
  const dataBase = DataBase()
  async function createTaskTime(taskTime, idTask) {
    const { createdAt, initiatedAt, endedAt, updatedAt } = taskTime
    const query =
      'INSERT INTO taskTime(idTask, createdAt, updatedAt, initiatedAt, endedAt) ' +
      'VALUES (?, ?, ?, ?, ?) '

    const params = [idTask, createdAt, updatedAt, initiatedAt, endedAt]

    await dataBase.parameterQuery(query, params)
  }

  return { createTaskTime }
}
