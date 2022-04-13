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

  function validateUpdateTask(updateTaskRequest, taskId) {
    const { title } = updateTaskRequest

    if (!title) {
      throw new Error('A task deve possuir um titulo.')
    }

    if (!taskId) {
      throw new Error('Deve ser informado o id da task.')
    }
  }

  return {
    validateCreateTask,
    validateUpdateTask,
  }
}
