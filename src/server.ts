import express from 'express'
import './database/connection'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(3333, () => {
  console.log("⚙ O Servidor esta online na porta: 3333")
})
