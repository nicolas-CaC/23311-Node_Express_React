import express from 'express'
import { ApiRouter } from './src/api/routes/ApiRouter.js'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import { cookieConfig, corsConfig } from './src/api/config/config.js'

const app = express()

const PORT = process.env.PORT || 8080

const router = express.Router()
const apiRouter = ApiRouter.get.api(router)

app.use(cors(corsConfig))
app.use(cookieParser(cookieConfig.key))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(apiRouter)

const server = app.listen(PORT, () =>
    console.log(`Conectado en http://localhost:${server.address().port}`))