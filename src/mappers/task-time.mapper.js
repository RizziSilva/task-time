export function TaskTimeMapper() {
  function fromCreateTaskTimeRequestToTaskTime(taskTimeRequest) {
    const { endedAt, initiatedAt } = taskTimeRequest
    const updatedAt = new Date().toLocaleString()
    const createdAt = new Date().toLocaleString()

    return { createdAt, endedAt, initiatedAt, updatedAt }
  }

  return { fromCreateTaskTimeRequestToTaskTime }
}
