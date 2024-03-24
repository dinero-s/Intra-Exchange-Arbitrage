const express = require('express')
const cors = require("cors")
const controller = require('./controller')
const BinanceAPI = require('./API/binanceAPI')

const server = async () => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  controller(app)

  BinanceAPI.start()
  
  app.listen(5000, () => console.log("server start"))

}

server()
