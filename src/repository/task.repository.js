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

  async function getLastActivityDay(userId, lastDayUsed) {
    const query =
      'SELECT MAX(createdAt) as maxDate FROM task WHERE idUser = ? AND createdAt < ?'
    const params = [userId, lastDayUsed]

    return await dataBase.parameterQuery(query, params)
  }

  async function getAllTaskAndTaskTimesByDay(request) {
    const { userId, day } = request
    const query =
      'SELECT t.id as taskId,	t.title, t.description, t.link, t.createdAt, tt.id as taskTimeId, tt.initiatedAt, tt.endedAt ' +
      'FROM task t INNER JOIN taskTime tt ON t.id = tt.idTask ' +
      'WHERE t.createdAt = ? AND t.idUser = ? ORDER BY tt.updatedAt DESC'
    const params = [day, userId]

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
