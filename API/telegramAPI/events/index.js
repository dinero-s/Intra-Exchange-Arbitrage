const messageFunctions = require('./message')
const callbackQueryFunctions = require('./callbackQuery')

const _message = (text) => {
  for (const key in messageFunctions) {
    if (key === text || text === '/start' || text === 'Start') {
      messageFunctions[key]()
    }
  }
}

const _callbackQuery = (data) => {
  for (const key in callbackQueryFunctions) {
    if (key === data) {
      callbackQueryFunctions[key]()
    }
  }
}

const eventListenerTelegram = (obj) => {
  try {
    for (const key in obj) {
      if(key === 'message' && obj.message.text) {
        return _message(obj.message.text)
      }
       else if (key === 'callback_query' && obj.callback_query.data) {
        return _callbackQuery(obj.callback_query.data)
      }
    }
  } catch (error) {
    return error
  }
}

module.exports = eventListenerTelegram