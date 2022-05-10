import {
  TaskController,
  TaskTimeController,
  UserController,
} from '../controller'

export function ConfigControllers(app) {
  const { taskController } = TaskController()
  const { taskTimeController } = TaskTimeController()
  const { userController } = UserController()

  app.use(taskController)
  app.use(taskTimeController)
  app.use(userController)
}
