export function TaskMapper() {
  function fromCreateTaskRequestToTask(taskRequest) {
    const { title, description, link, idUser } = taskRequest
    const createdAt = new Date()
    const updatedAt = new Date()
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

  return {
    fromCreateTaskRequestToTask,
  }
}
