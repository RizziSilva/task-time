import { TaskController, TaskTimeController } from '../controller'

export function ConfigControllers(app) {
  const { taskController } = TaskController()
  const { taskTimeController } = TaskTimeController()

  app.use(taskController)
  app.use(taskTimeController)
}
