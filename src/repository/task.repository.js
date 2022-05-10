import { DataBase } from '../config'

export function TaskRepository() {
  const dataBase = DataBase()

  async function createTask(taskRequest) {
    const { title, description, link, idUser } = taskRequest
    const query =
      'INSERT INTO task(idUSer, title, description, link) ' +
      'VALUES (?, ?, ?, ?) '
    const params = [idUser, title, description, link]

    return await dataBase.parameterQuery(query, params)
  }

  async function getTaskById(taskId) {
    const query = 'SELECT * FROM task WHERE id = ? '
    const params = [taskId]

    return await dataBase.parameterQuery(query, params)
  }

  async function updateTask(updateTaskRequest, taskId) {
    const { title, description, link } = updateTaskRequest
    const query =
      'UPDATE task SET title = ?, description = ?, link = ? WHERE id = ? '
    const params = [title, description, link, taskId]

    await dataBase.parameterQuery(query, params)
  }

  async function getAllTasksByUser(userId, offSet, limit) {
    const query =
      'SELECT * FROM task WHERE idUser = ? ORDER BY created_at LIMIT ? OFFSET ?'
    const params = [userId, limit, offSet]

    return await dataBase.parameterQuery(query, params)
  }

  async function countAllTasksByUserId(userId) {
    const query =
      'SELECT COUNT(*) as quantityOfTasks FROM task WHERE idUser = ?'
    const params = [userId]

    return await dataBase.parameterQuery(query, params)
  }

  return {
    getAllTasksByUser,
    createTask,
    getTaskById,
    updateTask,
    countAllTasksByUserId,
  }
}
