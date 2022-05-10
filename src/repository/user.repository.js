import { DataBase } from '../config'

export function UserRepository() {
  const dataBase = DataBase()

  async function createUser(userRequest) {
    const { name, email, password } = userRequest
    const query = 'INSERT INTO user(name, password, email) VALUES(?, ?, ?)'

    const params = [name, password, email]

    return dataBase.parameterQuery(query, params)
  }

  async function findUserByEmail(email) {
    const query = 'SELECT * FROM user WHERE email = ?'

    const params = [email]

    return dataBase.parameterQuery(query, params)
  }

  return { createUser, findUserByEmail }
}
