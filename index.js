const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {polling: true});
var films = [];
var chat_id = ''
bot.onText(/\/addfilm (.+)/, (msg, match) => {
  films.push([msg.chat.id,match[1]]);
  msg.sendMessage(msg.chat.id,'Успешно добавили в список просмотра.')
});
bot.onText(/\/film/, msg => {
  var i = find(films,msg.chat.id);
  msg.sendMessage(msg.chat.id,`Я предлагаю вам посмотреть фильм: ${films[i][1].shift()}`);
});
bot.onText('🖥️ Какой фильм посмотреть', msg => {
  bot.sendMessage(chat_id,'⏳ Анализирую....')
  setTimeout(() => {
    bot.sendMessage(chat_id,'Не получилось найти. Попробуйте попозже.')
  }, 3000);
});

bot.onText('⌨️ Добавить фильм', msg => {
  chat_id = (msg.chat.id)
  bot.sendMessage(chat_id,'⏳ Загрузка....')
  setTimeout(() => {
    bot.sendMessage(chat_id,'Чтобы добавить в список фильм используйте команду: /addfilm [name]. ❗❗ НА ДАННЫЙ МОМЕНТ ПОДДЕРЖИВАЕТСЯ ТОЛЬКО АНГЛИЙСКИЙ ЯЗЫК. НАЗВАНИЯ ПИШИТЕ НА АНГЛИЙСКОМ ЯЗЫКЕ ❗❗')
  }, 3000);
});
bot.onText(/\/start/, msg => {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['🖥️ Какой фильм посмотреть'],
        ['⌨️ Добавить фильм']
      ]
    })
  };
  bot.sendMessage(msg.chat.id,'Привет, меня зовут Робо Миша. Я помогу тебе с выбором фильма на просмотр. Нажми на один из кнопок.🤖', opts);
});
function find(arr, value) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][0] == value)
            return i;
}
