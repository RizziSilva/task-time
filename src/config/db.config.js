import mysql from 'mysql2/promise'

const serverConfig = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  host: process.env.DB_SERVER,
}

export function DataBase() {
  async function query(query) {
    const connection = await mysql.createConnection(serverConfig)
    try {
      const [rows, fields] = await connection.execute(query)

      return rows
    } catch (error) {
      throw error
    } finally {
      connection.end()
    }
  }

  async function parameterQuery(query, parameters) {
    const connection = await mysql.createConnection(serverConfig)
    try {
      const [rows, fields] = await connection.execute(query, parameters)

      return rows
    } catch (error) {
      throw error
    } finally {
      connection.end()
    }
  }

  return { query, parameterQuery }
}
