import { UserValidator } from '../validators'
import { UserRepository } from '../repository'

export function UserService() {
  const userValidator = UserValidator()
  const userRepository = UserRepository()

  async function createUser(createUserRequest) {
    userValidator.validateCreateUser(createUserRequest)

    await userRepository.createUser(createUserRequest)
  }

  async function foundUser(userLoginRequest) {
    userValidator.validateUserLogin(userLoginRequest)
  }

  return { createUser }
}
