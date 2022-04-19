export function TaskTimeValidator() {
  function validateCreateTaskTime(taskTimeRequest, taskId) {
    const { initiatedAt, endedAt } = taskTimeRequest

    if (!initiatedAt) {
      throw new Error('O taskTime precisa ter um tempo de inicio(initiatedAt).')
    }

    if (!endedAt) {
      throw new Error('O taskTime precisa ter um tempo de fim(endedAt).')
    }

    if (!taskId) {
      throw new Error('O taskTime precisa ser associado a uma task(idTask).')
    }
  }

  function validateUpdateTaskTime(updateTaskTimeRequest, idTaskTime) {
    const { initiatedAt, endedAt } = updateTaskTimeRequest

    if (!idTaskTime)
      throw new Error('Deve ser informado o id do taskTime(idTaskTime).')

    if (!initiatedAt)
      throw new Error('O taskTime precisa ter um tempo de inicio(initiatedAt).')

    if (!endedAt)
      throw new Error('O taskTime precisa ter um tempo de fim(endedAt).')
  }

  function validateDeleteTaskTime(idTaskTime) {
    if (!idTaskTime)
      throw new Error('deve ser informado o id da taskTime(idTaskTime)')
  }

  return {
    validateCreateTaskTime,
    validateUpdateTaskTime,
    validateDeleteTaskTime,
  }
}
