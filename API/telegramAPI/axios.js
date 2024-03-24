const axios = require("axios")
const axiosInstance = axios.create({
  baseURL: 'https://api.telegram.org/bot6755915869:AAF3mvxzrpOh25QV6iyXCE7l0kYI1uWgIaA',
})
module.exports = axiosInstance