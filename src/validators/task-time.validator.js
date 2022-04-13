export function TaskTimeValidator() {
  function validateCreateTaskTime(taskTimeRequest, taskId) {
    const { initiatedAt, endedAt } = taskTimeRequest

    if (!initiatedAt) {
      throw new Error('A task precisa ter um tempo de inicio.')
    }

    if (!endedAt) {
      throw new Error('A task precisa ter um tempo de fim.')
    }

    if (!taskId) {
      throw new Error('O tempo decorrido precisa ser associada a uma task.')
    }
  }

  return {
    validateCreateTaskTime,
  }
}
