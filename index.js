const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {polling: true})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shaibonjpeg:Shaibon2019@telegram-bot-hwhpx.mongodb.net/filmbot";



bot.command('db', msg => {

  MongoClient.connect(uri, function(err,db) {
    var collection = db.collection('films')
    var film = {firstName : `${msg.from.first_name}`};
    collection.insertOne(film, function(err,result){
      if(err){
        console.log(err);
        return;
      }
      console.log(result.ops);
      db.close();
    });
  });

})


bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`)
})
