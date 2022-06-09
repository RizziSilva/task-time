export function TaskMapper() {
  function fromCreateTaskRequestToTask(taskRequest) {
    const { title, description, link, idUser } = taskRequest
    const createdAt = new Date().toLocaleString()
    const updatedAt = new Date().toLocaleString()
    const initiatedAt = new Date(taskRequest.initiatedAt)
    const endedAt = new Date(taskRequest.endedAt)

    return {
      createdAt,
      updatedAt,
      initiatedAt,
      endedAt,
      title,
      description,
      link,
      idUser,
    }
  }

  function fromUpdateTaskRequestToTask(task, updateTask) {
    return { ...task, ...updateTask }
  }

  function fromDayToGetTasksByDay(userId, day, lastActivityDay) {
    const dayToUSe = day ? day : lastActivityDay

    return { dayToUSe, userId }
  }

  return {
    fromCreateTaskRequestToTask,
    fromUpdateTaskRequestToTask,
    fromDayToGetTasksByDay,
  }
}
