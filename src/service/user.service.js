import { UserValidator } from '../validators'
import { UserRepository } from '../repository'
import { UserMapper } from '../mappers'

export function UserService() {
  const userValidator = UserValidator()
  const userRepository = UserRepository()
  const userMapper = UserMapper()

  async function createUser(createUserRequest) {
    userValidator.validateCreateUser(createUserRequest)

    const user = userMapper.fromCreateUserRequestToUser(createUserRequest)

    await userRepository.createUser(user)
  }

  return { createUser }
}
