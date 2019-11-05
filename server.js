const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(express.json())

const carRouter = require('./carRouter')
server.use('/api/cars', carRouter)

module.exports = server