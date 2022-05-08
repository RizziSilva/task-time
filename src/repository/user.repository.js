import { DataBase } from '../config'

export function UserRepository() {
  const dataBase = DataBase()

  async function createUser(userRequest) {
    const { name, email, password } = userRequest
    const query = 'INSERT INTO user(name, password, email) VALUES(?, ?, ?)'

    const params = [name, password, email]

    return dataBase.parameterQuery(query, params)
  }

  return { createUser }
}
