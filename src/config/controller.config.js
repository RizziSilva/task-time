import { TaskController } from '../controller'

export function ConfigControllers(app) {
  const { taskController } = TaskController()

  app.use(taskController)
}
