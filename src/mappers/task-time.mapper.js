export function TaskTimeMapper() {
  function fromCreateTaskTimeRequestToTaskTime(taskTimeRequest) {
    const { endedAt, initiatedAt } = taskTimeRequest
    const localeEndedAt = new Date(endedAt).toLocaleString()
    const localeInitiatedAt = new Date(initiatedAt).toLocaleString()
    const updatedAt = new Date().toLocaleString()
    const createdAt = new Date().toLocaleString()

    return {
      initiatedAt: localeInitiatedAt,
      endedAt: localeEndedAt,
      createdAt,
      updatedAt,
    }
  }

  function fromUpdateTaskTimeRequestToTaskTime(updateTaskTimeRequest) {
    const { endedAt, initiatedAt } = updateTaskTimeRequest
    const localeEndedAt = new Date(endedAt).toLocaleString()
    const localeInitiatedAt = new Date(initiatedAt).toLocaleString()
    const updatedAt = new Date().toLocaleString()

    return { endedAt: localeEndedAt, initiatedAt: localeInitiatedAt, updatedAt }
  }

  return {
    fromCreateTaskTimeRequestToTaskTime,
    fromUpdateTaskTimeRequestToTaskTime,
  }
}
