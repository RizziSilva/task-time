import { DataBase } from '../config'

export function TaskRepository() {
  const dataBase = DataBase()

  async function createTask(taskRequest) {
    const { title, description, link, idUser, createdAt } = taskRequest
    const query =
      'INSERT INTO task(idUSer, title, description, link, createdAt) ' +
      'VALUES (?, ?, ?, ?, ?) '
    const params = [idUser, title, description, link, createdAt]

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
      'SELECT * FROM task WHERE idUser = ? ORDER BY createdAt LIMIT ? OFFSET ?'
    const params = [userId, limit, offSet]

    return await dataBase.parameterQuery(query, params)
  }

  async function countAllTasksByUserId(userId) {
    const query =
      'SELECT COUNT(*) as quantityOfTasks FROM task WHERE idUser = ?'
    const params = [userId]

    return await dataBase.parameterQuery(query, params)
  }

  async function getLastActivityDay(userId) {
    const query = 'SELECT MAX(createdAt) FROM task WHERE idUser = ?'
    const params = [userId]

    return await dataBase.parameterQuery(query, params)
  }

  async function getAllTaskAndTaskTimesByDay(request) {
    const { userId, initialDate, endDate } = request
    console.log({ userId, initialDate, endDate })
    const query =
      'SELECT t.id as taskId,	t.title, t.description, t.link, t.createdAt, tt.id as taskTimeId, tt.initiatedAt, tt.endedAt ' +
      'FROM task t INNER JOIN taskTime tt ON t.id = tt.idTask ' +
      'WHERE t.createdAt BETWEEN ? AND ? AND t.idUser = ? ORDER BY t.createdAt'
    const params = [initialDate, endDate, userId]

    return await dataBase.parameterQuery(query, params)
  }

  return {
    getAllTasksByUser,
    createTask,
    getTaskById,
    updateTask,
    countAllTasksByUserId,
    getLastActivityDay,
    getAllTaskAndTaskTimesByDay,
  }
}
