const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg ==> {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`)
})
