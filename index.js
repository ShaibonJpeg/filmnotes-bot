const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});
var films = [];
bot.onText(/\/addfilm (.+)/, (msg,match) => {
  films.push([msg.chat.id,match[1]]);
  bot.sendMessage(msg.chat.id,'Успешно добавили в список просмотра.',films.push([msg.chat.id,match[1]]))
});
bot.onText(/\/film/, msg => {
  var i = find(films,msg.chat.id);
  bot.sendMessage(msg.chat.id,`Я предлагаю вам посмотреть фильм: ${films}`);
});
bot.onText(/\🖥️ Какой фильм посмотреть/, function onPhotoText(msg){
  bot.sendMessage(msg.chat.id,'⏳ Анализирую....')
  setTimeout(() => {
    bot.sendMessage(msg.chat.id,'Не получилось найти. Попробуйте попозже.')
  }, 3000);
});

bot.onText(/\⌨️ Добавить фильм/, function onPhotoText(msg) {
  bot.sendMessage(msg.chat.id,'⏳ Загрузка....')
  setTimeout(() => {
    bot.sendMessage(msg.chat.id,"Чтобы добавить в список фильм используйте команду: /addfilm [name].\n\n ❗❗ НА ДАННЫЙ МОМЕНТ ПОДДЕРЖИВАЕТСЯ ТОЛЬКО АНГЛИЙСКИЙ ЯЗЫК. НАЗВАНИЯ ПИШИТЕ НА АНГЛИЙСКОМ ЯЗЫКЕ ❗❗")
  }, 3000);
});
bot.onText(/\/start/, msg => {
  const opts = {
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
