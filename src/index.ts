import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import { errorMiddleware } from './middlewares/errorMiddleware'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.use(errorMiddleware)
app.listen(process.env.PORT)
