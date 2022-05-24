import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './config/environment.config'
import { ErrorMiddleware } from './middlewares'
import { ConfigControllers } from './config'

const app = express()
const errorMiddleware = ErrorMiddleware()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

ConfigControllers(app)

app.use(errorMiddleware.errorHandler)

app.listen(3000, () => {
  console.log('Task Time Listen on Port: ' + 3000)
})
