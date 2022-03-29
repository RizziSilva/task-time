import express from 'express'
import bodyParser from 'body-parser'
import { ConfigControllers } from './config'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

ConfigControllers(app)

app.listen(3000, () => {
  console.log('Task Time Listen on Port: ' + 3000)
})
