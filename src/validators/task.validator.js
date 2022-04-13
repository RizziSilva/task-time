export function TaskValidator() {
  function validateCreateTask(taskRequest) {
    if (!taskRequest.title) {
      throw new Error('A task deve possuir um titulo.')
    }

    if (!taskRequest.idUser) {
      throw new Error('A task deve ter um usuário associado.')
    }

    if (!taskRequest.initiatedAt) {
      throw new Error('A task deve ter um tempo de inicio.')
    }

    if (!taskRequest.endedAt) {
      throw new Error('A task deve ter um tempo de termino.')
    }
  }

  return {
    validateCreateTask,
  }
}
