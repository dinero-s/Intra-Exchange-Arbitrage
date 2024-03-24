const service = require("../service/serviceTelegram");

const controller = (app) => {
  app.use('/', service.callBackInfo)
}

module.exports = controller 