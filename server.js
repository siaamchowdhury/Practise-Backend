const express = require('express')
const cors = require('cors')
const ConnectDB = require('./connection/ConnectDB')
const dotenv = require('dotenv').config()

const server = express()
server.use(cors())
const port = 5000
ConnectDB()

server.use(express.json())
server.use('/', require('./routes/ProductRoute'))

server.listen(port, (req, res) => {
  console.log('Im running at port:', port)
})

