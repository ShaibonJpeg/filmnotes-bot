const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {polling: true})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shaibonjpeg:Shaibon2019@telegram-bot-hwhpx.mongodb.net/";



bot.onText(/\/db (.+)/, (msg, match) => {

  MongoClient.connect(uri, function(err,client) {
    const db = client.db('filmbot');
    // var film = {firstName : `${msg.from.first_name}`, film_name: `${match[1]}`, chat_id: `${msg.chat.id}`};
    var film = {firstName : "Инсаф"};
    const collection = db.collection('films');
    collection.insertOne([{firstName : "Инсаф"},{firstName : "Амир"}], function(err,result){






      if(err){
        console.log(err);
        return;
      }
      console.log(result.ops);
      client.close();
    });
  });

})


bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`)
})
