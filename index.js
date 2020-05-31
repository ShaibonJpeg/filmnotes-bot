const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {polling: true})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shaibonjpeg:Shaibon2019@cluster0-yn2yo.mongodb.net/test?retryWrites=true&w=majority";



bot.onText(/\/db (.+)/, (msg, match) => {

  MongoClient.connect(uri, function(err,result) {
    const db = client.db("filmbot")
    const collection = db.collection("films").insertOne({"firstName" : "Инсаф"})
  });

});
