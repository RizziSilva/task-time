export function UserValidator() {
  function validateCreateUser(createUserRequest) {
    const { email, password } = createUserRequest

    if (!password) throw new Error('Deve ser informado a senha.')

    if (!email) throw new Error('Deve ser informado o email.')
  }

  return { validateCreateUser }
}
