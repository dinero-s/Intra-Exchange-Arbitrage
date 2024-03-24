const WebSocket = require('ws');

class BinanceApi {
  static intraExchangeArbitrageData = {}
  static _resData = {}
  static _connection;
  static _triggersCalculate = {}
  static _streams = ["btcusdt@miniTicker"]

  constructor() { }

  static setTrigger(key, callback) {
    if (key && callback) {
      this._triggersCalculate[key] = callback
    }
  }

  static deleteTrigger(key) {
    if (key) {
      delete this._triggersCalculate[key]
      console.log("delete")
    }
  }

  static _setData(data) {
    const parseData = JSON.parse(data.data)
    this._resData = `${parseData.s}: ${parseData.c}`
    this._triggresCall()
  }

  static _triggresCall() {
    for (const trigger in this._triggersCalculate) {
      const callback = this._triggersCalculate[trigger];
      callback(JSON.stringify(this._resData))
    }
  }

  static start() {
    this._connection = new WebSocket("wss://stream.binance.com:9443/ws/" + this._streams.join('/'))

    this._connection.onopen = () => {
      console.log("connected")
    }

    this._connection.onmessage = (data) => {
      this._setData(data)
      this._triggresCall(data)
    }
  }
}

module.exports = BinanceApi