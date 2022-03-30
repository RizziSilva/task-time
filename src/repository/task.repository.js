import { DataBase } from '../config'

export function TaskRepository() {
  const dataBase = DataBase()

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
  }
}
