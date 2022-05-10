import { UserValidator } from '../validators'
import { UserRepository } from '../repository'

// TODO silva.william 10/02/2022: Refazer essa service levando em conta a segurança dos dados do usuário.
export function UserService() {
  const userValidator = UserValidator()
  const userRepository = UserRepository()

  async function createUser(createUserRequest) {
    userValidator.validateCreateUser(createUserRequest)

    await userRepository.createUser(createUserRequest)
  }

  async function getUserLogin(userLoginRequest) {
    userValidator.validateUserLogin(userLoginRequest)

    const userResponse = await userRepository.findUserByEmail(
      userLoginRequest.email,
    )
    const user = userResponse[0]

    if (!user) throw new Error('Login ou senha inválidos.')

    userValidator.validateUserCredentials(
      user.password,
      userLoginRequest.password,
    )

    return user
  }

  return { createUser, getUserLogin }
}
