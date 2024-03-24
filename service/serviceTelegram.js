const TelegramApi = require("../API/telegramAPI");
const BinanceAPI = require('../API/binanceAPI');
const eventListenerTelegram = require('../API/telegramAPI/events')

const callBackInfo = async (req, res) => {
  try {
    res.send(eventListenerTelegram(req.body)) 
    res.send(TelegramApi.getChatID(req.body))
  } catch (error) {
    res.send()
  }
}

module.exports = {
  callBackInfo
} 