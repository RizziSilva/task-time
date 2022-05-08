export function UserValidator() {
  function validateCreateUser(createUserRequest) {
    const { email, password, name } = createUserRequest

    if (!password) throw new Error('Deve ser informado a senha.')

    if (!email) throw new Error('Deve ser informado o email.')

    if (!name) throw new Error('Deve ser informado o nome do usuário.')
  }

  function validateUserLogin(userLoginRequest) {
    const { email, password } = userLoginRequest

    if (!email) throw new Error('Deve ser informado o email do usuário.')

    if (!password) throw new Error('Deve ser informado a senha do usuário.')
  }

  return { validateCreateUser, validateUserLogin }
}
