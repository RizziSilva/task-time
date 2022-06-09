export function TaskValidator() {
  function validateCreateTask(taskRequest) {
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

  function validateGetTasks(userId) {
    if (!userId)
      throw new Error('Deve ser informado o id do usuário vinculado a task')
  }

  return {
    validateCreateTask,
    validateUpdateTask,
    validateGetTasks,
  }
}
