const TelegramApi = require("..")
const BinanceAPI = require('../../binanceAPI')

const functionStart = () => {
  BinanceAPI.setTrigger('setTrigger', (data) => {
    return TelegramApi.sendButton({
      text: data, buttons: [{
        "text": "STOP",
        "callbackData": "stop"
      }]
    })
  })
}

module.exports = {
  start: functionStart
}