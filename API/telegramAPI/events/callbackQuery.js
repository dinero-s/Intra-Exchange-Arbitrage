const BinanceAPI = require('../../binanceAPI')
const TelegramApi = require("..")

const functionStop = () => {
  try {
    BinanceAPI.deleteTrigger('setTrigger')
  } catch (error) {
    return error
  }
}

module.exports = {
  stop: functionStop
}