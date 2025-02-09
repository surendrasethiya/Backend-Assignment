const express = require('express')
const morgan = require('morgan')
import { rateLimit } from 'express-rate-limit'


const AppError = require('./utils/appError')
const globleErrorHandler = require('./controller/errorController')

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const itemsRouter = require("./routes/itemsRoutes")

const app = express()



const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
})

app.use(limiter)

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/items', itemsRouter)



app.use(globleErrorHandler.handleErrors)

module.exports = app 