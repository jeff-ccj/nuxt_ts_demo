import bodyParser from 'body-parser'
import express from 'express'

import api from './api'

const app = express()

app.use(bodyParser.json())

app.use(api)

module.exports = app


