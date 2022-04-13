import { DataBase } from '../config'

export function TaskRepository() {
  const dataBase = DataBase()

  async function createTask(taskRequest) {
    try {
      const { title, description, link, idUser } = taskRequest
      const query =
        'INSERT INTO task(idUSer, title, description, link) ' +
        'VALUES (?, ?, ?, ?) '
      const params = [idUser, title, description, link]

      return await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  async function getAllTasksByUser(userId) {
    try {
      const query = 'SELECT * FROM task WHERE idUser = ?'
      const params = [userId]

      return await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  return {
    getAllTasksByUser,
    createTask,
  }
}
