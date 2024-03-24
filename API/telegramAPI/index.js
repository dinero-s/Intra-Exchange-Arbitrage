const axios = require('./axios')

class TelegramApi {
  static _chatID;
  constructor() { }
  static async setWebHook(uri) {
    return await axios.post(`/setWebHook?url=${uri}`)
  }

  static getChatID(data) {
    if (data) {
      this._chatID = data.message.chat.id
    }
  }

  static async sendButton({ chatId = this._chatID, text, buttons }) {
    try {
      const keyboards = []
      if (Array.isArray(buttons))
        buttons.forEach(item => {
          keyboards.push({
            text: item.text,
            "callback_data": item.callbackData
          })
        })
      return await this._sendMessage(`chat_id=${chatId}&text=${text}&reply_markup={"inline_keyboard":[${JSON.stringify(keyboards)}]}`)
    } catch (error) {
      console.log(error)
    }
  }

  static async _sendMessage(uriData) {
    try {
      await axios.post(`/sendMessage?${uriData}`)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = TelegramApi
